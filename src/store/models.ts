import { Action, Thunk, action, thunk } from 'easy-peasy'
import { orderBy, uniqBy } from 'lodash'

import { Content } from '../lib'

// posts

export interface Post {
  content: any
  created: object
  excerpt: string
  featured: boolean
  hero: string
  slug: string
  tags: string[]
  thumb: string
  title: string
  updated: object
}

export interface PostsModel {
  loading: boolean

  posts: Post[]
  meta: {
    more?: boolean
    next?: number
    total?: number
  }

  fetch: Thunk<PostsModel, number>
  fetchOne: Thunk<PostsModel, string>

  toggleLoading: Action<PostsModel, boolean>

  setPosts: Action<PostsModel, Post[]>
  setMeta: Action<PostsModel, object>
}

const posts: PostsModel = {
  loading: true,

  posts: [],
  meta: {},

  fetch: thunk(async (actions, payload) => {
    actions.toggleLoading(true)

    const { meta, posts } = await Content.fetchPosts(payload)

    actions.setPosts(posts)
    actions.setMeta(meta)

    actions.toggleLoading(false)
  }),
  fetchOne: thunk(async (actions, payload, { getState }) => {
    const existing = getState().posts.find(({ slug }) => slug === payload)

    if (existing) {
      return
    }

    actions.toggleLoading(true)

    const post = await Content.fetchPost(payload)

    actions.setPosts([post])

    actions.toggleLoading(false)
  }),

  toggleLoading: action((state, payload) => {
    state.loading = payload
  }),
  setPosts: action((state, payload) => {
    const posts = orderBy(
      uniqBy([...state.posts, ...payload], 'slug'),
      'created',
      'desc'
    )

    state.posts = posts
  }),
  setMeta: action((state, payload) => {
    state.meta = payload
  })
}

// projects

export interface Project {
  content: any
  created: object
  image: string
  links: {
    label: string
    link: string
  }[]
  order: number
  slug: string
  title: string
  updated: object
}

export interface ProjectsModel {
  loading: boolean

  projects: Project[]

  fetch: Thunk<ProjectsModel>

  toggleLoading: Action<ProjectsModel, boolean>

  setProjects: Action<ProjectsModel, Project[]>
}

const projects: ProjectsModel = {
  loading: true,

  projects: [],

  fetch: thunk(async actions => {
    actions.toggleLoading(true)

    const projects = await Content.fetchProjects()

    actions.setProjects(projects)

    actions.toggleLoading(false)
  }),

  toggleLoading: action((state, payload) => {
    state.loading = payload
  }),
  setProjects: action((state, payload) => {
    state.projects = payload
  })
}

// store

export interface StoreModel {
  posts: PostsModel
  projects: ProjectsModel
}

const model: StoreModel = {
  posts,
  projects
}

export default model

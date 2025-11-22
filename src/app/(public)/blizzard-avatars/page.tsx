import { type Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Blizzard avatars × Ali Zahid',
}

export default async function Page() {
  const collections = await fetchCollection()

  return (
    <div className="flex flex-col gap-16">
      <h1 className="font-bold text-6xl">Blizzard avatars</h1>

      {collections
        .filter((collection) => collection.avatars.length > 0)
        .map((collection) => (
          <div className="flex flex-col gap-2" key={collection.id}>
            <span className="font-bold text-2xl">{collection.name}</span>

            <div className="grid grid-cols-2 gap-4 empty:hidden md:grid-cols-4 lg:grid-cols-6">
              {collection.avatars.map((avatar) => (
                <div className="flex flex-col bg-neutral-200" key={avatar.id}>
                  <Image
                    alt={avatar.name}
                    className="w-full"
                    height={256}
                    src={avatar.image}
                    unoptimized
                    width={256}
                  />

                  <span className="text-pretty p-2 font-medium">
                    {avatar.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  )
}

type Franchises = {
  avatarUrl: string
  avatarCollection: Array<string>
  avatarHashes: Record<string, string>
  franchiseMetaData: Record<
    string,
    {
      title: string
    }
  >
}

type Avatars = {
  avatarUrl: string
  avatarCollection: Record<string, Array<string>>
  avatarHashes: Record<string, string>
  avatarMetaData: Record<
    string,
    {
      name: string
    }
  >
}

async function fetchCollection() {
  const franchises = await get<Franchises>(
    '/static/avatar/franchise/manifest_en-gb.json',
  )
  const avatars = await get<Avatars>(
    '/static/avatar/account/manifest_en-gb.json',
  )

  return Object.entries(franchises.franchiseMetaData).map(
    ([franchise, { title }]) => ({
      avatars: (avatars.avatarCollection[franchise] ?? []).map((id) => ({
        id,
        image: `https://blzprofile.akamaized.net/static/avatar/hashed/${avatars.avatarHashes[id]}.jpg`,
        name: avatars.avatarMetaData[id].name,
      })),
      id: franchise,
      image: `https://blzprofile.akamaized.net/static/avatar/hashed/${franchises.avatarHashes[`${franchise}@2x`]}.png`,
      name: title,
    }),
  )
}

async function get<Type>(uri: string) {
  const url = new URL(uri, 'https://blzprofile.akamaized.net')

  const response = await fetch(url)

  return response.json() as Type
}

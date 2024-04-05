export type Maybe<T> = T;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Hex: { input: any; output: any; }
  Json: { input: any; output: any; }
  Long: { input: any; output: any; }
  RGBAHue: { input: any; output: any; }
  RGBATransparency: { input: any; output: any; }
  RichTextAST: { input: any; output: any; }
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int']['output'];
};

/** Asset system model */
export type Asset = Entity & Node & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String']['output'];
  /** The file handle */
  handle: Scalars['String']['output'];
  /** The height of the file */
  height: Maybe<Scalars['Float']['output']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  imagePost: Array<Post>;
  imageProject: Array<Project>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size: Maybe<Scalars['Float']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']['output'];
  /** The file width */
  width: Maybe<Scalars['Float']['output']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetImagePostArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales: InputMaybe<Array<Locale>>;
  orderBy: InputMaybe<PostOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PostWhereInput>;
};


/** Asset system model */
export type AssetImageProjectArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales: InputMaybe<Array<Locale>>;
  orderBy: InputMaybe<ProjectOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ProjectWhereInput>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales: InputMaybe<Array<Locale>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  fileName: Scalars['String']['input'];
  handle: Scalars['String']['input'];
  height: InputMaybe<Scalars['Float']['input']>;
  imagePost: InputMaybe<PostCreateManyInlineInput>;
  imageProject: InputMaybe<ProjectCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType: InputMaybe<Scalars['String']['input']>;
  size: InputMaybe<Scalars['Float']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  width: InputMaybe<Scalars['Float']['input']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  fileName: Scalars['String']['input'];
  handle: Scalars['String']['input'];
  height: InputMaybe<Scalars['Float']['input']>;
  mimeType: InputMaybe<Scalars['String']['input']>;
  size: InputMaybe<Scalars['Float']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  width: InputMaybe<Scalars['Float']['input']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  documentInStages_every: InputMaybe<AssetWhereStageInput>;
  documentInStages_none: InputMaybe<AssetWhereStageInput>;
  documentInStages_some: InputMaybe<AssetWhereStageInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']['input']>;
  imagePost_every: InputMaybe<PostWhereInput>;
  imagePost_none: InputMaybe<PostWhereInput>;
  imagePost_some: InputMaybe<PostWhereInput>;
  imageProject_every: InputMaybe<ProjectWhereInput>;
  imageProject_none: InputMaybe<ProjectWhereInput>;
  imageProject_some: InputMaybe<ProjectWhereInput>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document: InputMaybe<DocumentTransformationInput>;
  image: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetUpdateInput = {
  fileName: InputMaybe<Scalars['String']['input']>;
  handle: InputMaybe<Scalars['String']['input']>;
  height: InputMaybe<Scalars['Float']['input']>;
  imagePost: InputMaybe<PostUpdateManyInlineInput>;
  imageProject: InputMaybe<ProjectUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType: InputMaybe<Scalars['String']['input']>;
  size: InputMaybe<Scalars['Float']['input']>;
  width: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName: InputMaybe<Scalars['String']['input']>;
  handle: InputMaybe<Scalars['String']['input']>;
  height: InputMaybe<Scalars['Float']['input']>;
  mimeType: InputMaybe<Scalars['String']['input']>;
  size: InputMaybe<Scalars['Float']['input']>;
  width: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName: InputMaybe<Scalars['String']['input']>;
  height: InputMaybe<Scalars['Float']['input']>;
  /** Optional updates to localizations */
  localizations: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType: InputMaybe<Scalars['String']['input']>;
  size: InputMaybe<Scalars['Float']['input']>;
  width: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName: InputMaybe<Scalars['String']['input']>;
  height: InputMaybe<Scalars['Float']['input']>;
  mimeType: InputMaybe<Scalars['String']['input']>;
  size: InputMaybe<Scalars['Float']['input']>;
  width: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Asset document */
  disconnect: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Asset document */
  update: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  documentInStages_every: InputMaybe<AssetWhereStageInput>;
  documentInStages_none: InputMaybe<AssetWhereStageInput>;
  documentInStages_some: InputMaybe<AssetWhereStageInput>;
  fileName: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  fileName_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fileName_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fileName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fileName_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fileName_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  fileName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fileName_starts_with: InputMaybe<Scalars['String']['input']>;
  handle: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  handle_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  handle_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  handle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  handle_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  handle_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  handle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  handle_starts_with: InputMaybe<Scalars['String']['input']>;
  height: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  height_gt: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  height_gte: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  height_in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  height_lt: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  height_lte: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  height_not_in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  id: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']['input']>;
  imagePost_every: InputMaybe<PostWhereInput>;
  imagePost_none: InputMaybe<PostWhereInput>;
  imagePost_some: InputMaybe<PostWhereInput>;
  imageProject_every: InputMaybe<ProjectWhereInput>;
  imageProject_none: InputMaybe<ProjectWhereInput>;
  imageProject_some: InputMaybe<ProjectWhereInput>;
  mimeType: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  mimeType_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  mimeType_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  mimeType_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  mimeType_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  mimeType_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  mimeType_starts_with: InputMaybe<Scalars['String']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  size: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  size_gt: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  size_gte: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  size_in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  size_lt: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  size_lte: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  size_not: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  size_not_in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
  width: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  width_gt: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  width_gte: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  width_in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  width_lt: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  width_lte: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  width_not_in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']['input']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']['output'];
};

export type Block = Entity & Node & {
  __typename?: 'Block';
  content: Maybe<Scalars['String']['output']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Block>;
  /** List of Block versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  name: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String']['output'];
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy: Maybe<User>;
};


export type BlockCreatedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};


export type BlockDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type BlockHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride: InputMaybe<Stage>;
};


export type BlockPublishedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};


export type BlockScheduledInArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales: InputMaybe<Array<Locale>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ScheduledOperationWhereInput>;
};


export type BlockUpdatedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};

export type BlockConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: BlockWhereUniqueInput;
};

/** A connection to a list of items. */
export type BlockConnection = {
  __typename?: 'BlockConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<BlockEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type BlockCreateInput = {
  content: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type BlockCreateManyInlineInput = {
  /** Connect multiple existing Block documents */
  connect: InputMaybe<Array<BlockWhereUniqueInput>>;
  /** Create and connect multiple existing Block documents */
  create: InputMaybe<Array<BlockCreateInput>>;
};

export type BlockCreateOneInlineInput = {
  /** Connect one existing Block document */
  connect: InputMaybe<BlockWhereUniqueInput>;
  /** Create and connect one Block document */
  create: InputMaybe<BlockCreateInput>;
};

/** An edge in a connection. */
export type BlockEdge = {
  __typename?: 'BlockEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Block;
};

/** Identifies documents */
export type BlockManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<BlockWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<BlockWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<BlockWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']['input']>;
  content: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  content_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  content_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  content_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  content_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  content_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  content_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  content_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  content_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  content_starts_with: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  documentInStages_every: InputMaybe<BlockWhereStageInput>;
  documentInStages_none: InputMaybe<BlockWhereStageInput>;
  documentInStages_some: InputMaybe<BlockWhereStageInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with: InputMaybe<Scalars['String']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  slug: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

export enum BlockOrderByInput {
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type BlockUpdateInput = {
  content: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
};

export type BlockUpdateManyInlineInput = {
  /** Connect multiple existing Block documents */
  connect: InputMaybe<Array<BlockConnectInput>>;
  /** Create and connect multiple Block documents */
  create: InputMaybe<Array<BlockCreateInput>>;
  /** Delete multiple Block documents */
  delete: InputMaybe<Array<BlockWhereUniqueInput>>;
  /** Disconnect multiple Block documents */
  disconnect: InputMaybe<Array<BlockWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Block documents */
  set: InputMaybe<Array<BlockWhereUniqueInput>>;
  /** Update multiple Block documents */
  update: InputMaybe<Array<BlockUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Block documents */
  upsert: InputMaybe<Array<BlockUpsertWithNestedWhereUniqueInput>>;
};

export type BlockUpdateManyInput = {
  content: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
};

export type BlockUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: BlockUpdateManyInput;
  /** Document search */
  where: BlockWhereInput;
};

export type BlockUpdateOneInlineInput = {
  /** Connect existing Block document */
  connect: InputMaybe<BlockWhereUniqueInput>;
  /** Create and connect one Block document */
  create: InputMaybe<BlockCreateInput>;
  /** Delete currently connected Block document */
  delete: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Block document */
  disconnect: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Block document */
  update: InputMaybe<BlockUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Block document */
  upsert: InputMaybe<BlockUpsertWithNestedWhereUniqueInput>;
};

export type BlockUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: BlockUpdateInput;
  /** Unique document search */
  where: BlockWhereUniqueInput;
};

export type BlockUpsertInput = {
  /** Create document if it didn't exist */
  create: BlockCreateInput;
  /** Update document if it exists */
  update: BlockUpdateInput;
};

export type BlockUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: BlockUpsertInput;
  /** Unique document search */
  where: BlockWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type BlockWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type BlockWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<BlockWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<BlockWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<BlockWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']['input']>;
  content: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  content_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  content_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  content_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  content_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  content_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  content_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  content_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  content_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  content_starts_with: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  documentInStages_every: InputMaybe<BlockWhereStageInput>;
  documentInStages_none: InputMaybe<BlockWhereStageInput>;
  documentInStages_some: InputMaybe<BlockWhereStageInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with: InputMaybe<Scalars['String']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  slug: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type BlockWhereStageInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<BlockWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<BlockWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<BlockWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent: InputMaybe<BlockWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage: InputMaybe<Stage>;
};

/** References Block record uniquely */
export type BlockWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String']['output'];
  hex: Scalars['Hex']['output'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex: InputMaybe<Scalars['Hex']['input']>;
  rgba: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after: InputMaybe<Scalars['ID']['input']>;
  /** Connect document before specified document */
  before: InputMaybe<Scalars['ID']['input']>;
  /** Connect document at last position */
  end: InputMaybe<Scalars['Boolean']['input']>;
  /** Connect document at first position */
  start: InputMaybe<Scalars['Boolean']['input']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime']['output'];
  data: Maybe<Scalars['Json']['output']>;
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

/** An object with an ID */
export type Entity = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

/** This enumeration holds all typenames that implement the Entity interface. Components and models implement the Entity interface. */
export enum EntityTypeName {
  /** Asset system model */
  Asset = 'Asset',
  Block = 'Block',
  Link = 'Link',
  Post = 'Post',
  Project = 'Project',
  ProjectLink = 'ProjectLink',
  /** Scheduled Operation system model */
  ScheduledOperation = 'ScheduledOperation',
  /** Scheduled Release system model */
  ScheduledRelease = 'ScheduledRelease',
  /** User system model */
  User = 'User'
}

/** Allows to specify input to query models and components directly */
export type EntityWhereInput = {
  /** The ID of an object */
  id: Scalars['ID']['input'];
  locale: InputMaybe<Locale>;
  stage: Stage;
  /** The Type name of an object */
  typename: EntityTypeName;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height: InputMaybe<Scalars['Int']['input']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width: InputMaybe<Scalars['Int']['input']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize: InputMaybe<ImageResizeInput>;
};

export type Link = Entity & Node & {
  __typename?: 'Link';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy: Maybe<User>;
  description: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<Link>;
  /** List of Link versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  tags: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy: Maybe<User>;
  url: Scalars['String']['output'];
  visible: Scalars['Boolean']['output'];
};


export type LinkCreatedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};


export type LinkDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type LinkHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride: InputMaybe<Stage>;
};


export type LinkPublishedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};


export type LinkScheduledInArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales: InputMaybe<Array<Locale>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ScheduledOperationWhereInput>;
};


export type LinkUpdatedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};

export type LinkConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: LinkWhereUniqueInput;
};

/** A connection to a list of items. */
export type LinkConnection = {
  __typename?: 'LinkConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<LinkEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type LinkCreateInput = {
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  image: InputMaybe<Scalars['String']['input']>;
  tags: InputMaybe<Array<Scalars['String']['input']>>;
  title: Scalars['String']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  url: Scalars['String']['input'];
  visible: Scalars['Boolean']['input'];
};

export type LinkCreateManyInlineInput = {
  /** Connect multiple existing Link documents */
  connect: InputMaybe<Array<LinkWhereUniqueInput>>;
  /** Create and connect multiple existing Link documents */
  create: InputMaybe<Array<LinkCreateInput>>;
};

export type LinkCreateOneInlineInput = {
  /** Connect one existing Link document */
  connect: InputMaybe<LinkWhereUniqueInput>;
  /** Create and connect one Link document */
  create: InputMaybe<LinkCreateInput>;
};

/** An edge in a connection. */
export type LinkEdge = {
  __typename?: 'LinkEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Link;
};

/** Identifies documents */
export type LinkManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<LinkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<LinkWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<LinkWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  description: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with: InputMaybe<Scalars['String']['input']>;
  documentInStages_every: InputMaybe<LinkWhereStageInput>;
  documentInStages_none: InputMaybe<LinkWhereStageInput>;
  documentInStages_some: InputMaybe<LinkWhereStageInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']['input']>;
  image: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  image_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  image_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  image_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  image_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  image_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  image_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  image_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  image_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  image_starts_with: InputMaybe<Scalars['String']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  tags: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  tags_contains_all: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  tags_contains_none: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  tags_contains_some: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  tags_not: InputMaybe<Array<Scalars['String']['input']>>;
  title: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
  url: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with: InputMaybe<Scalars['String']['input']>;
  visible: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  visible_not: InputMaybe<Scalars['Boolean']['input']>;
};

export enum LinkOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ImageAsc = 'image_ASC',
  ImageDesc = 'image_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TagsAsc = 'tags_ASC',
  TagsDesc = 'tags_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  VisibleAsc = 'visible_ASC',
  VisibleDesc = 'visible_DESC'
}

export type LinkUpdateInput = {
  description: InputMaybe<Scalars['String']['input']>;
  image: InputMaybe<Scalars['String']['input']>;
  tags: InputMaybe<Array<Scalars['String']['input']>>;
  title: InputMaybe<Scalars['String']['input']>;
  url: InputMaybe<Scalars['String']['input']>;
  visible: InputMaybe<Scalars['Boolean']['input']>;
};

export type LinkUpdateManyInlineInput = {
  /** Connect multiple existing Link documents */
  connect: InputMaybe<Array<LinkConnectInput>>;
  /** Create and connect multiple Link documents */
  create: InputMaybe<Array<LinkCreateInput>>;
  /** Delete multiple Link documents */
  delete: InputMaybe<Array<LinkWhereUniqueInput>>;
  /** Disconnect multiple Link documents */
  disconnect: InputMaybe<Array<LinkWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Link documents */
  set: InputMaybe<Array<LinkWhereUniqueInput>>;
  /** Update multiple Link documents */
  update: InputMaybe<Array<LinkUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Link documents */
  upsert: InputMaybe<Array<LinkUpsertWithNestedWhereUniqueInput>>;
};

export type LinkUpdateManyInput = {
  description: InputMaybe<Scalars['String']['input']>;
  image: InputMaybe<Scalars['String']['input']>;
  tags: InputMaybe<Array<Scalars['String']['input']>>;
  title: InputMaybe<Scalars['String']['input']>;
  url: InputMaybe<Scalars['String']['input']>;
  visible: InputMaybe<Scalars['Boolean']['input']>;
};

export type LinkUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: LinkUpdateManyInput;
  /** Document search */
  where: LinkWhereInput;
};

export type LinkUpdateOneInlineInput = {
  /** Connect existing Link document */
  connect: InputMaybe<LinkWhereUniqueInput>;
  /** Create and connect one Link document */
  create: InputMaybe<LinkCreateInput>;
  /** Delete currently connected Link document */
  delete: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Link document */
  disconnect: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Link document */
  update: InputMaybe<LinkUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Link document */
  upsert: InputMaybe<LinkUpsertWithNestedWhereUniqueInput>;
};

export type LinkUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: LinkUpdateInput;
  /** Unique document search */
  where: LinkWhereUniqueInput;
};

export type LinkUpsertInput = {
  /** Create document if it didn't exist */
  create: LinkCreateInput;
  /** Update document if it exists */
  update: LinkUpdateInput;
};

export type LinkUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: LinkUpsertInput;
  /** Unique document search */
  where: LinkWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type LinkWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type LinkWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<LinkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<LinkWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<LinkWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  description: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with: InputMaybe<Scalars['String']['input']>;
  documentInStages_every: InputMaybe<LinkWhereStageInput>;
  documentInStages_none: InputMaybe<LinkWhereStageInput>;
  documentInStages_some: InputMaybe<LinkWhereStageInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']['input']>;
  image: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  image_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  image_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  image_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  image_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  image_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  image_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  image_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  image_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  image_starts_with: InputMaybe<Scalars['String']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  tags: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  tags_contains_all: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  tags_contains_none: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  tags_contains_some: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  tags_not: InputMaybe<Array<Scalars['String']['input']>>;
  title: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
  url: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with: InputMaybe<Scalars['String']['input']>;
  visible: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  visible_not: InputMaybe<Scalars['Boolean']['input']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type LinkWhereStageInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<LinkWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<LinkWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<LinkWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent: InputMaybe<LinkWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage: InputMaybe<Stage>;
};

/** References Link record uniquely */
export type LinkWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']['input']>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset: Maybe<Asset>;
  /** Create one block */
  createBlock: Maybe<Block>;
  /** Create one link */
  createLink: Maybe<Link>;
  /** Create one post */
  createPost: Maybe<Post>;
  /** Create one project */
  createProject: Maybe<Project>;
  /** Create one scheduledRelease */
  createScheduledRelease: Maybe<ScheduledRelease>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset: Maybe<Asset>;
  /** Delete one block from _all_ existing stages. Returns deleted document. */
  deleteBlock: Maybe<Block>;
  /** Delete one link from _all_ existing stages. Returns deleted document. */
  deleteLink: Maybe<Link>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Block documents
   * @deprecated Please use the new paginated many mutation (deleteManyBlocksConnection)
   */
  deleteManyBlocks: BatchPayload;
  /** Delete many Block documents, return deleted documents */
  deleteManyBlocksConnection: BlockConnection;
  /**
   * Delete many Link documents
   * @deprecated Please use the new paginated many mutation (deleteManyLinksConnection)
   */
  deleteManyLinks: BatchPayload;
  /** Delete many Link documents, return deleted documents */
  deleteManyLinksConnection: LinkConnection;
  /**
   * Delete many Post documents
   * @deprecated Please use the new paginated many mutation (deleteManyPostsConnection)
   */
  deleteManyPosts: BatchPayload;
  /** Delete many Post documents, return deleted documents */
  deleteManyPostsConnection: PostConnection;
  /**
   * Delete many Project documents
   * @deprecated Please use the new paginated many mutation (deleteManyProjectsConnection)
   */
  deleteManyProjects: BatchPayload;
  /** Delete many Project documents, return deleted documents */
  deleteManyProjectsConnection: ProjectConnection;
  /** Delete one post from _all_ existing stages. Returns deleted document. */
  deletePost: Maybe<Post>;
  /** Delete one project from _all_ existing stages. Returns deleted document. */
  deleteProject: Maybe<Project>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease: Maybe<ScheduledRelease>;
  /** Publish one asset */
  publishAsset: Maybe<Asset>;
  /** Publish one block */
  publishBlock: Maybe<Block>;
  /** Publish one link */
  publishLink: Maybe<Link>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Block documents
   * @deprecated Please use the new paginated many mutation (publishManyBlocksConnection)
   */
  publishManyBlocks: BatchPayload;
  /** Publish many Block documents */
  publishManyBlocksConnection: BlockConnection;
  /**
   * Publish many Link documents
   * @deprecated Please use the new paginated many mutation (publishManyLinksConnection)
   */
  publishManyLinks: BatchPayload;
  /** Publish many Link documents */
  publishManyLinksConnection: LinkConnection;
  /**
   * Publish many Post documents
   * @deprecated Please use the new paginated many mutation (publishManyPostsConnection)
   */
  publishManyPosts: BatchPayload;
  /** Publish many Post documents */
  publishManyPostsConnection: PostConnection;
  /**
   * Publish many Project documents
   * @deprecated Please use the new paginated many mutation (publishManyProjectsConnection)
   */
  publishManyProjects: BatchPayload;
  /** Publish many Project documents */
  publishManyProjectsConnection: ProjectConnection;
  /** Publish one post */
  publishPost: Maybe<Post>;
  /** Publish one project */
  publishProject: Maybe<Project>;
  /** Schedule to publish one asset */
  schedulePublishAsset: Maybe<Asset>;
  /** Schedule to publish one block */
  schedulePublishBlock: Maybe<Block>;
  /** Schedule to publish one link */
  schedulePublishLink: Maybe<Link>;
  /** Schedule to publish one post */
  schedulePublishPost: Maybe<Post>;
  /** Schedule to publish one project */
  schedulePublishProject: Maybe<Project>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset: Maybe<Asset>;
  /** Unpublish one block from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishBlock: Maybe<Block>;
  /** Unpublish one link from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishLink: Maybe<Link>;
  /** Unpublish one post from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPost: Maybe<Post>;
  /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProject: Maybe<Project>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset: Maybe<Asset>;
  /** Unpublish one block from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishBlock: Maybe<Block>;
  /** Unpublish one link from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishLink: Maybe<Link>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Block documents
   * @deprecated Please use the new paginated many mutation (unpublishManyBlocksConnection)
   */
  unpublishManyBlocks: BatchPayload;
  /** Find many Block documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyBlocksConnection: BlockConnection;
  /**
   * Unpublish many Link documents
   * @deprecated Please use the new paginated many mutation (unpublishManyLinksConnection)
   */
  unpublishManyLinks: BatchPayload;
  /** Find many Link documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyLinksConnection: LinkConnection;
  /**
   * Unpublish many Post documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPostsConnection)
   */
  unpublishManyPosts: BatchPayload;
  /** Find many Post documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPostsConnection: PostConnection;
  /**
   * Unpublish many Project documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProjectsConnection)
   */
  unpublishManyProjects: BatchPayload;
  /** Find many Project documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProjectsConnection: ProjectConnection;
  /** Unpublish one post from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPost: Maybe<Post>;
  /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProject: Maybe<Project>;
  /** Update one asset */
  updateAsset: Maybe<Asset>;
  /** Update one block */
  updateBlock: Maybe<Block>;
  /** Update one link */
  updateLink: Maybe<Link>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many blocks
   * @deprecated Please use the new paginated many mutation (updateManyBlocksConnection)
   */
  updateManyBlocks: BatchPayload;
  /** Update many Block documents */
  updateManyBlocksConnection: BlockConnection;
  /**
   * Update many links
   * @deprecated Please use the new paginated many mutation (updateManyLinksConnection)
   */
  updateManyLinks: BatchPayload;
  /** Update many Link documents */
  updateManyLinksConnection: LinkConnection;
  /**
   * Update many posts
   * @deprecated Please use the new paginated many mutation (updateManyPostsConnection)
   */
  updateManyPosts: BatchPayload;
  /** Update many Post documents */
  updateManyPostsConnection: PostConnection;
  /**
   * Update many projects
   * @deprecated Please use the new paginated many mutation (updateManyProjectsConnection)
   */
  updateManyProjects: BatchPayload;
  /** Update many Project documents */
  updateManyProjectsConnection: ProjectConnection;
  /** Update one post */
  updatePost: Maybe<Post>;
  /** Update one project */
  updateProject: Maybe<Project>;
  /** Update one scheduledRelease */
  updateScheduledRelease: Maybe<ScheduledRelease>;
  /** Upsert one asset */
  upsertAsset: Maybe<Asset>;
  /** Upsert one block */
  upsertBlock: Maybe<Block>;
  /** Upsert one link */
  upsertLink: Maybe<Link>;
  /** Upsert one post */
  upsertPost: Maybe<Post>;
  /** Upsert one project */
  upsertProject: Maybe<Project>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateBlockArgs = {
  data: BlockCreateInput;
};


export type MutationCreateLinkArgs = {
  data: LinkCreateInput;
};


export type MutationCreatePostArgs = {
  data: PostCreateInput;
};


export type MutationCreateProjectArgs = {
  data: ProjectCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteBlockArgs = {
  where: BlockWhereUniqueInput;
};


export type MutationDeleteLinkArgs = {
  where: LinkWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyBlocksArgs = {
  where: InputMaybe<BlockManyWhereInput>;
};


export type MutationDeleteManyBlocksConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<BlockManyWhereInput>;
};


export type MutationDeleteManyLinksArgs = {
  where: InputMaybe<LinkManyWhereInput>;
};


export type MutationDeleteManyLinksConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<LinkManyWhereInput>;
};


export type MutationDeleteManyPostsArgs = {
  where: InputMaybe<PostManyWhereInput>;
};


export type MutationDeleteManyPostsConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PostManyWhereInput>;
};


export type MutationDeleteManyProjectsArgs = {
  where: InputMaybe<ProjectManyWhereInput>;
};


export type MutationDeleteManyProjectsConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ProjectManyWhereInput>;
};


export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationDeleteProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishBlockArgs = {
  to?: Array<Stage>;
  where: BlockWhereUniqueInput;
};


export type MutationPublishLinkArgs = {
  to?: Array<Stage>;
  where: LinkWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyBlocksArgs = {
  to?: Array<Stage>;
  where: InputMaybe<BlockManyWhereInput>;
};


export type MutationPublishManyBlocksConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where: InputMaybe<BlockManyWhereInput>;
};


export type MutationPublishManyLinksArgs = {
  to?: Array<Stage>;
  where: InputMaybe<LinkManyWhereInput>;
};


export type MutationPublishManyLinksConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where: InputMaybe<LinkManyWhereInput>;
};


export type MutationPublishManyPostsArgs = {
  to?: Array<Stage>;
  where: InputMaybe<PostManyWhereInput>;
};


export type MutationPublishManyPostsConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where: InputMaybe<PostManyWhereInput>;
};


export type MutationPublishManyProjectsArgs = {
  to?: Array<Stage>;
  where: InputMaybe<ProjectManyWhereInput>;
};


export type MutationPublishManyProjectsConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where: InputMaybe<ProjectManyWhereInput>;
};


export type MutationPublishPostArgs = {
  to?: Array<Stage>;
  where: PostWhereUniqueInput;
};


export type MutationPublishProjectArgs = {
  to?: Array<Stage>;
  where: ProjectWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt: InputMaybe<Scalars['DateTime']['input']>;
  releaseId: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishBlockArgs = {
  releaseAt: InputMaybe<Scalars['DateTime']['input']>;
  releaseId: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: BlockWhereUniqueInput;
};


export type MutationSchedulePublishLinkArgs = {
  releaseAt: InputMaybe<Scalars['DateTime']['input']>;
  releaseId: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: LinkWhereUniqueInput;
};


export type MutationSchedulePublishPostArgs = {
  releaseAt: InputMaybe<Scalars['DateTime']['input']>;
  releaseId: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: PostWhereUniqueInput;
};


export type MutationSchedulePublishProjectArgs = {
  releaseAt: InputMaybe<Scalars['DateTime']['input']>;
  releaseId: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: ProjectWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales: InputMaybe<Array<Locale>>;
  releaseAt: InputMaybe<Scalars['DateTime']['input']>;
  releaseId: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishBlockArgs = {
  from?: Array<Stage>;
  releaseAt: InputMaybe<Scalars['DateTime']['input']>;
  releaseId: InputMaybe<Scalars['String']['input']>;
  where: BlockWhereUniqueInput;
};


export type MutationScheduleUnpublishLinkArgs = {
  from?: Array<Stage>;
  releaseAt: InputMaybe<Scalars['DateTime']['input']>;
  releaseId: InputMaybe<Scalars['String']['input']>;
  where: LinkWhereUniqueInput;
};


export type MutationScheduleUnpublishPostArgs = {
  from?: Array<Stage>;
  releaseAt: InputMaybe<Scalars['DateTime']['input']>;
  releaseId: InputMaybe<Scalars['String']['input']>;
  where: PostWhereUniqueInput;
};


export type MutationScheduleUnpublishProjectArgs = {
  from?: Array<Stage>;
  releaseAt: InputMaybe<Scalars['DateTime']['input']>;
  releaseId: InputMaybe<Scalars['String']['input']>;
  where: ProjectWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishBlockArgs = {
  from?: Array<Stage>;
  where: BlockWhereUniqueInput;
};


export type MutationUnpublishLinkArgs = {
  from?: Array<Stage>;
  where: LinkWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales: InputMaybe<Array<Locale>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyBlocksArgs = {
  from?: Array<Stage>;
  where: InputMaybe<BlockManyWhereInput>;
};


export type MutationUnpublishManyBlocksConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where: InputMaybe<BlockManyWhereInput>;
};


export type MutationUnpublishManyLinksArgs = {
  from?: Array<Stage>;
  where: InputMaybe<LinkManyWhereInput>;
};


export type MutationUnpublishManyLinksConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where: InputMaybe<LinkManyWhereInput>;
};


export type MutationUnpublishManyPostsArgs = {
  from?: Array<Stage>;
  where: InputMaybe<PostManyWhereInput>;
};


export type MutationUnpublishManyPostsConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where: InputMaybe<PostManyWhereInput>;
};


export type MutationUnpublishManyProjectsArgs = {
  from?: Array<Stage>;
  where: InputMaybe<ProjectManyWhereInput>;
};


export type MutationUnpublishManyProjectsConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where: InputMaybe<ProjectManyWhereInput>;
};


export type MutationUnpublishPostArgs = {
  from?: Array<Stage>;
  where: PostWhereUniqueInput;
};


export type MutationUnpublishProjectArgs = {
  from?: Array<Stage>;
  where: ProjectWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateBlockArgs = {
  data: BlockUpdateInput;
  where: BlockWhereUniqueInput;
};


export type MutationUpdateLinkArgs = {
  data: LinkUpdateInput;
  where: LinkWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  data: AssetUpdateManyInput;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyBlocksArgs = {
  data: BlockUpdateManyInput;
  where: InputMaybe<BlockManyWhereInput>;
};


export type MutationUpdateManyBlocksConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  data: BlockUpdateManyInput;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<BlockManyWhereInput>;
};


export type MutationUpdateManyLinksArgs = {
  data: LinkUpdateManyInput;
  where: InputMaybe<LinkManyWhereInput>;
};


export type MutationUpdateManyLinksConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  data: LinkUpdateManyInput;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<LinkManyWhereInput>;
};


export type MutationUpdateManyPostsArgs = {
  data: PostUpdateManyInput;
  where: InputMaybe<PostManyWhereInput>;
};


export type MutationUpdateManyPostsConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  data: PostUpdateManyInput;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PostManyWhereInput>;
};


export type MutationUpdateManyProjectsArgs = {
  data: ProjectUpdateManyInput;
  where: InputMaybe<ProjectManyWhereInput>;
};


export type MutationUpdateManyProjectsConnectionArgs = {
  after: InputMaybe<Scalars['ID']['input']>;
  before: InputMaybe<Scalars['ID']['input']>;
  data: ProjectUpdateManyInput;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ProjectManyWhereInput>;
};


export type MutationUpdatePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpdateProjectArgs = {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertBlockArgs = {
  upsert: BlockUpsertInput;
  where: BlockWhereUniqueInput;
};


export type MutationUpsertLinkArgs = {
  upsert: LinkUpsertInput;
  where: LinkWhereUniqueInput;
};


export type MutationUpsertPostArgs = {
  upsert: PostUpsertInput;
  where: PostWhereUniqueInput;
};


export type MutationUpsertProjectArgs = {
  upsert: ProjectUpsertInput;
  where: ProjectWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** Number of items in the current page. */
  pageSize: Maybe<Scalars['Int']['output']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

export type Post = Entity & Node & {
  __typename?: 'Post';
  content: Scalars['String']['output'];
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy: Maybe<User>;
  date: Scalars['Date']['output'];
  /** Get the document in other stages */
  documentInStages: Array<Post>;
  excerpt: Scalars['String']['output'];
  /** List of Post versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image: Asset;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String']['output'];
  /** System stage field */
  stage: Stage;
  title: Scalars['String']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy: Maybe<User>;
  visible: Scalars['Boolean']['output'];
};


export type PostCreatedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};


export type PostDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type PostHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride: InputMaybe<Stage>;
};


export type PostImageArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};


export type PostPublishedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};


export type PostScheduledInArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales: InputMaybe<Array<Locale>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ScheduledOperationWhereInput>;
};


export type PostUpdatedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};

export type PostConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PostWhereUniqueInput;
};

/** A connection to a list of items. */
export type PostConnection = {
  __typename?: 'PostConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PostEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PostCreateInput = {
  content: Scalars['String']['input'];
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  date: Scalars['Date']['input'];
  excerpt: Scalars['String']['input'];
  image: AssetCreateOneInlineInput;
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  visible: Scalars['Boolean']['input'];
};

export type PostCreateManyInlineInput = {
  /** Connect multiple existing Post documents */
  connect: InputMaybe<Array<PostWhereUniqueInput>>;
  /** Create and connect multiple existing Post documents */
  create: InputMaybe<Array<PostCreateInput>>;
};

export type PostCreateOneInlineInput = {
  /** Connect one existing Post document */
  connect: InputMaybe<PostWhereUniqueInput>;
  /** Create and connect one Post document */
  create: InputMaybe<PostCreateInput>;
};

/** An edge in a connection. */
export type PostEdge = {
  __typename?: 'PostEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Post;
};

/** Identifies documents */
export type PostManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<PostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<PostWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<PostWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']['input']>;
  content: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  content_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  content_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  content_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  content_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  content_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  content_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  content_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  content_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  content_starts_with: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  date: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  date_gt: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  date_gte: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  date_in: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  date_lt: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  date_lte: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  date_not: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  date_not_in: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  documentInStages_every: InputMaybe<PostWhereStageInput>;
  documentInStages_none: InputMaybe<PostWhereStageInput>;
  documentInStages_some: InputMaybe<PostWhereStageInput>;
  excerpt: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  excerpt_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  excerpt_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  excerpt_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  excerpt_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  excerpt_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  excerpt_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  excerpt_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  excerpt_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  excerpt_starts_with: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']['input']>;
  image: InputMaybe<AssetWhereInput>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  slug: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with: InputMaybe<Scalars['String']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
  visible: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  visible_not: InputMaybe<Scalars['Boolean']['input']>;
};

export enum PostOrderByInput {
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VisibleAsc = 'visible_ASC',
  VisibleDesc = 'visible_DESC'
}

export type PostUpdateInput = {
  content: InputMaybe<Scalars['String']['input']>;
  date: InputMaybe<Scalars['Date']['input']>;
  excerpt: InputMaybe<Scalars['String']['input']>;
  image: InputMaybe<AssetUpdateOneInlineInput>;
  slug: InputMaybe<Scalars['String']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
  visible: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostUpdateManyInlineInput = {
  /** Connect multiple existing Post documents */
  connect: InputMaybe<Array<PostConnectInput>>;
  /** Create and connect multiple Post documents */
  create: InputMaybe<Array<PostCreateInput>>;
  /** Delete multiple Post documents */
  delete: InputMaybe<Array<PostWhereUniqueInput>>;
  /** Disconnect multiple Post documents */
  disconnect: InputMaybe<Array<PostWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Post documents */
  set: InputMaybe<Array<PostWhereUniqueInput>>;
  /** Update multiple Post documents */
  update: InputMaybe<Array<PostUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Post documents */
  upsert: InputMaybe<Array<PostUpsertWithNestedWhereUniqueInput>>;
};

export type PostUpdateManyInput = {
  content: InputMaybe<Scalars['String']['input']>;
  date: InputMaybe<Scalars['Date']['input']>;
  excerpt: InputMaybe<Scalars['String']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
  visible: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PostUpdateManyInput;
  /** Document search */
  where: PostWhereInput;
};

export type PostUpdateOneInlineInput = {
  /** Connect existing Post document */
  connect: InputMaybe<PostWhereUniqueInput>;
  /** Create and connect one Post document */
  create: InputMaybe<PostCreateInput>;
  /** Delete currently connected Post document */
  delete: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Post document */
  disconnect: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Post document */
  update: InputMaybe<PostUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Post document */
  upsert: InputMaybe<PostUpsertWithNestedWhereUniqueInput>;
};

export type PostUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PostUpdateInput;
  /** Unique document search */
  where: PostWhereUniqueInput;
};

export type PostUpsertInput = {
  /** Create document if it didn't exist */
  create: PostCreateInput;
  /** Update document if it exists */
  update: PostUpdateInput;
};

export type PostUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PostUpsertInput;
  /** Unique document search */
  where: PostWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PostWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type PostWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<PostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<PostWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<PostWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']['input']>;
  content: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  content_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  content_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  content_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  content_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  content_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  content_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  content_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  content_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  content_starts_with: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  date: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  date_gt: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  date_gte: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  date_in: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  date_lt: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  date_lte: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  date_not: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  date_not_in: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  documentInStages_every: InputMaybe<PostWhereStageInput>;
  documentInStages_none: InputMaybe<PostWhereStageInput>;
  documentInStages_some: InputMaybe<PostWhereStageInput>;
  excerpt: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  excerpt_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  excerpt_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  excerpt_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  excerpt_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  excerpt_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  excerpt_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  excerpt_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  excerpt_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  excerpt_starts_with: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']['input']>;
  image: InputMaybe<AssetWhereInput>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  slug: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with: InputMaybe<Scalars['String']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
  visible: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  visible_not: InputMaybe<Scalars['Boolean']['input']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PostWhereStageInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<PostWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<PostWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<PostWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent: InputMaybe<PostWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage: InputMaybe<Stage>;
};

/** References Post record uniquely */
export type PostWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
};

export type Project = Entity & Node & {
  __typename?: 'Project';
  content: Scalars['String']['output'];
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Project>;
  /** List of Project versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image: Asset;
  links: Array<ProjectLink>;
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String']['output'];
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy: Maybe<User>;
};


export type ProjectCreatedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};


export type ProjectDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type ProjectHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride: InputMaybe<Stage>;
};


export type ProjectImageArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};


export type ProjectLinksArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales: InputMaybe<Array<Locale>>;
  orderBy: InputMaybe<ProjectLinkOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ProjectLinkWhereInput>;
};


export type ProjectPublishedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};


export type ProjectScheduledInArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales: InputMaybe<Array<Locale>>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ScheduledOperationWhereInput>;
};


export type ProjectUpdatedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};

export type ProjectConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProjectWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProjectEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProjectCreateInput = {
  content: Scalars['String']['input'];
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  image: AssetCreateOneInlineInput;
  links: InputMaybe<ProjectLinkCreateManyInlineInput>;
  name: Scalars['String']['input'];
  order: Scalars['Int']['input'];
  slug: Scalars['String']['input'];
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProjectCreateManyInlineInput = {
  /** Connect multiple existing Project documents */
  connect: InputMaybe<Array<ProjectWhereUniqueInput>>;
  /** Create and connect multiple existing Project documents */
  create: InputMaybe<Array<ProjectCreateInput>>;
};

export type ProjectCreateOneInlineInput = {
  /** Connect one existing Project document */
  connect: InputMaybe<ProjectWhereUniqueInput>;
  /** Create and connect one Project document */
  create: InputMaybe<ProjectCreateInput>;
};

/** An edge in a connection. */
export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Project;
};

export type ProjectLink = Entity & {
  __typename?: 'ProjectLink';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  link: Scalars['String']['output'];
  /** System stage field */
  stage: Stage;
};

export type ProjectLinkConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProjectLinkWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProjectLinkConnection = {
  __typename?: 'ProjectLinkConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProjectLinkEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProjectLinkCreateInput = {
  label: Scalars['String']['input'];
  link: Scalars['String']['input'];
};

export type ProjectLinkCreateManyInlineInput = {
  /** Create and connect multiple existing ProjectLink documents */
  create: InputMaybe<Array<ProjectLinkCreateInput>>;
};

export type ProjectLinkCreateOneInlineInput = {
  /** Create and connect one ProjectLink document */
  create: InputMaybe<ProjectLinkCreateInput>;
};

export type ProjectLinkCreateWithPositionInput = {
  /** Document to create */
  data: ProjectLinkCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ProjectLinkEdge = {
  __typename?: 'ProjectLinkEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ProjectLink;
};

/** Identifies documents */
export type ProjectLinkManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ProjectLinkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ProjectLinkWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ProjectLinkWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']['input']>;
  label: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  label_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  label_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  label_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  label_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  label_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  label_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  label_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  label_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  label_starts_with: InputMaybe<Scalars['String']['input']>;
  link: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  link_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  link_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  link_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  link_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  link_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  link_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  link_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  link_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  link_starts_with: InputMaybe<Scalars['String']['input']>;
};

export enum ProjectLinkOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC'
}

export type ProjectLinkParent = Project;

export type ProjectLinkParentConnectInput = {
  Project: InputMaybe<ProjectConnectInput>;
};

export type ProjectLinkParentCreateInput = {
  Project: InputMaybe<ProjectCreateInput>;
};

export type ProjectLinkParentCreateManyInlineInput = {
  /** Connect multiple existing ProjectLinkParent documents */
  connect: InputMaybe<Array<ProjectLinkParentWhereUniqueInput>>;
  /** Create and connect multiple existing ProjectLinkParent documents */
  create: InputMaybe<Array<ProjectLinkParentCreateInput>>;
};

export type ProjectLinkParentCreateOneInlineInput = {
  /** Connect one existing ProjectLinkParent document */
  connect: InputMaybe<ProjectLinkParentWhereUniqueInput>;
  /** Create and connect one ProjectLinkParent document */
  create: InputMaybe<ProjectLinkParentCreateInput>;
};

export type ProjectLinkParentUpdateInput = {
  Project: InputMaybe<ProjectUpdateInput>;
};

export type ProjectLinkParentUpdateManyInlineInput = {
  /** Connect multiple existing ProjectLinkParent documents */
  connect: InputMaybe<Array<ProjectLinkParentConnectInput>>;
  /** Create and connect multiple ProjectLinkParent documents */
  create: InputMaybe<Array<ProjectLinkParentCreateInput>>;
  /** Delete multiple ProjectLinkParent documents */
  delete: InputMaybe<Array<ProjectLinkParentWhereUniqueInput>>;
  /** Disconnect multiple ProjectLinkParent documents */
  disconnect: InputMaybe<Array<ProjectLinkParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ProjectLinkParent documents */
  set: InputMaybe<Array<ProjectLinkParentWhereUniqueInput>>;
  /** Update multiple ProjectLinkParent documents */
  update: InputMaybe<Array<ProjectLinkParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ProjectLinkParent documents */
  upsert: InputMaybe<Array<ProjectLinkParentUpsertWithNestedWhereUniqueInput>>;
};

export type ProjectLinkParentUpdateManyWithNestedWhereInput = {
  Project: InputMaybe<ProjectUpdateManyWithNestedWhereInput>;
};

export type ProjectLinkParentUpdateOneInlineInput = {
  /** Connect existing ProjectLinkParent document */
  connect: InputMaybe<ProjectLinkParentWhereUniqueInput>;
  /** Create and connect one ProjectLinkParent document */
  create: InputMaybe<ProjectLinkParentCreateInput>;
  /** Delete currently connected ProjectLinkParent document */
  delete: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ProjectLinkParent document */
  disconnect: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ProjectLinkParent document */
  update: InputMaybe<ProjectLinkParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProjectLinkParent document */
  upsert: InputMaybe<ProjectLinkParentUpsertWithNestedWhereUniqueInput>;
};

export type ProjectLinkParentUpdateWithNestedWhereUniqueInput = {
  Project: InputMaybe<ProjectUpdateWithNestedWhereUniqueInput>;
};

export type ProjectLinkParentUpsertWithNestedWhereUniqueInput = {
  Project: InputMaybe<ProjectUpsertWithNestedWhereUniqueInput>;
};

export type ProjectLinkParentWhereInput = {
  Project: InputMaybe<ProjectWhereInput>;
};

export type ProjectLinkParentWhereUniqueInput = {
  Project: InputMaybe<ProjectWhereUniqueInput>;
};

export type ProjectLinkUpdateInput = {
  label: InputMaybe<Scalars['String']['input']>;
  link: InputMaybe<Scalars['String']['input']>;
};

export type ProjectLinkUpdateManyInlineInput = {
  /** Create and connect multiple ProjectLink component instances */
  create: InputMaybe<Array<ProjectLinkCreateWithPositionInput>>;
  /** Delete multiple ProjectLink documents */
  delete: InputMaybe<Array<ProjectLinkWhereUniqueInput>>;
  /** Update multiple ProjectLink component instances */
  update: InputMaybe<Array<ProjectLinkUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ProjectLink component instances */
  upsert: InputMaybe<Array<ProjectLinkUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ProjectLinkUpdateManyInput = {
  label: InputMaybe<Scalars['String']['input']>;
  link: InputMaybe<Scalars['String']['input']>;
};

export type ProjectLinkUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProjectLinkUpdateManyInput;
  /** Document search */
  where: ProjectLinkWhereInput;
};

export type ProjectLinkUpdateOneInlineInput = {
  /** Create and connect one ProjectLink document */
  create: InputMaybe<ProjectLinkCreateInput>;
  /** Delete currently connected ProjectLink document */
  delete: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ProjectLink document */
  update: InputMaybe<ProjectLinkUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProjectLink document */
  upsert: InputMaybe<ProjectLinkUpsertWithNestedWhereUniqueInput>;
};

export type ProjectLinkUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data: InputMaybe<ProjectLinkUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ProjectLinkWhereUniqueInput;
};

export type ProjectLinkUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProjectLinkUpdateInput;
  /** Unique document search */
  where: ProjectLinkWhereUniqueInput;
};

export type ProjectLinkUpsertInput = {
  /** Create document if it didn't exist */
  create: ProjectLinkCreateInput;
  /** Update document if it exists */
  update: ProjectLinkUpdateInput;
};

export type ProjectLinkUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data: InputMaybe<ProjectLinkUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ProjectLinkWhereUniqueInput;
};

export type ProjectLinkUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProjectLinkUpsertInput;
  /** Unique document search */
  where: ProjectLinkWhereUniqueInput;
};

/** Identifies documents */
export type ProjectLinkWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ProjectLinkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ProjectLinkWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ProjectLinkWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']['input']>;
  label: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  label_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  label_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  label_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  label_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  label_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  label_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  label_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  label_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  label_starts_with: InputMaybe<Scalars['String']['input']>;
  link: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  link_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  link_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  link_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  link_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  link_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  link_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  link_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  link_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  link_starts_with: InputMaybe<Scalars['String']['input']>;
};

/** References ProjectLink record uniquely */
export type ProjectLinkWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']['input']>;
};

/** Identifies documents */
export type ProjectManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ProjectWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']['input']>;
  content: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  content_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  content_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  content_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  content_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  content_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  content_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  content_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  content_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  content_starts_with: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  documentInStages_every: InputMaybe<ProjectWhereStageInput>;
  documentInStages_none: InputMaybe<ProjectWhereStageInput>;
  documentInStages_some: InputMaybe<ProjectWhereStageInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']['input']>;
  image: InputMaybe<AssetWhereInput>;
  links_every: InputMaybe<ProjectLinkWhereInput>;
  links_none: InputMaybe<ProjectLinkWhereInput>;
  links_some: InputMaybe<ProjectLinkWhereInput>;
  name: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  order_gt: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  order_gte: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  order_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  order_lt: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  order_lte: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  order_not: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  order_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  slug: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

export enum ProjectOrderByInput {
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OrderAsc = 'order_ASC',
  OrderDesc = 'order_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ProjectUpdateInput = {
  content: InputMaybe<Scalars['String']['input']>;
  image: InputMaybe<AssetUpdateOneInlineInput>;
  links: InputMaybe<ProjectLinkUpdateManyInlineInput>;
  name: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Scalars['Int']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
};

export type ProjectUpdateManyInlineInput = {
  /** Connect multiple existing Project documents */
  connect: InputMaybe<Array<ProjectConnectInput>>;
  /** Create and connect multiple Project documents */
  create: InputMaybe<Array<ProjectCreateInput>>;
  /** Delete multiple Project documents */
  delete: InputMaybe<Array<ProjectWhereUniqueInput>>;
  /** Disconnect multiple Project documents */
  disconnect: InputMaybe<Array<ProjectWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Project documents */
  set: InputMaybe<Array<ProjectWhereUniqueInput>>;
  /** Update multiple Project documents */
  update: InputMaybe<Array<ProjectUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Project documents */
  upsert: InputMaybe<Array<ProjectUpsertWithNestedWhereUniqueInput>>;
};

export type ProjectUpdateManyInput = {
  content: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Scalars['Int']['input']>;
};

export type ProjectUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProjectUpdateManyInput;
  /** Document search */
  where: ProjectWhereInput;
};

export type ProjectUpdateOneInlineInput = {
  /** Connect existing Project document */
  connect: InputMaybe<ProjectWhereUniqueInput>;
  /** Create and connect one Project document */
  create: InputMaybe<ProjectCreateInput>;
  /** Delete currently connected Project document */
  delete: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Project document */
  disconnect: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Project document */
  update: InputMaybe<ProjectUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Project document */
  upsert: InputMaybe<ProjectUpsertWithNestedWhereUniqueInput>;
};

export type ProjectUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProjectUpdateInput;
  /** Unique document search */
  where: ProjectWhereUniqueInput;
};

export type ProjectUpsertInput = {
  /** Create document if it didn't exist */
  create: ProjectCreateInput;
  /** Update document if it exists */
  update: ProjectUpdateInput;
};

export type ProjectUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProjectUpsertInput;
  /** Unique document search */
  where: ProjectWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ProjectWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ProjectWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ProjectWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']['input']>;
  content: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  content_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  content_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  content_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  content_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  content_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  content_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  content_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  content_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  content_starts_with: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  documentInStages_every: InputMaybe<ProjectWhereStageInput>;
  documentInStages_none: InputMaybe<ProjectWhereStageInput>;
  documentInStages_some: InputMaybe<ProjectWhereStageInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']['input']>;
  image: InputMaybe<AssetWhereInput>;
  links_every: InputMaybe<ProjectLinkWhereInput>;
  links_none: InputMaybe<ProjectLinkWhereInput>;
  links_some: InputMaybe<ProjectLinkWhereInput>;
  name: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  order_gt: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  order_gte: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  order_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  order_lt: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  order_lte: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  order_not: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  order_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  slug: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ProjectWhereStageInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ProjectWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ProjectWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ProjectWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent: InputMaybe<ProjectWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage: InputMaybe<Stage>;
};

/** References Project record uniquely */
export type ProjectWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single block */
  block: Maybe<Block>;
  /** Retrieve document version */
  blockVersion: Maybe<DocumentVersion>;
  /** Retrieve multiple blocks */
  blocks: Array<Block>;
  /** Retrieve multiple blocks using the Relay connection interface */
  blocksConnection: BlockConnection;
  /** Fetches an object given its ID */
  entities: Maybe<Array<Entity>>;
  /** Retrieve a single link */
  link: Maybe<Link>;
  /** Retrieve document version */
  linkVersion: Maybe<DocumentVersion>;
  /** Retrieve multiple links */
  links: Array<Link>;
  /** Retrieve multiple links using the Relay connection interface */
  linksConnection: LinkConnection;
  /** Fetches an object given its ID */
  node: Maybe<Node>;
  /** Retrieve a single post */
  post: Maybe<Post>;
  /** Retrieve document version */
  postVersion: Maybe<DocumentVersion>;
  /** Retrieve multiple posts */
  posts: Array<Post>;
  /** Retrieve multiple posts using the Relay connection interface */
  postsConnection: PostConnection;
  /** Retrieve a single project */
  project: Maybe<Project>;
  /** Retrieve document version */
  projectVersion: Maybe<DocumentVersion>;
  /** Retrieve multiple projects */
  projects: Array<Project>;
  /** Retrieve multiple projects using the Relay connection interface */
  projectsConnection: ProjectConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single user */
  user: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<AssetOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<AssetOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<AssetWhereInput>;
};


export type QueryBlockArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: BlockWhereUniqueInput;
};


export type QueryBlockVersionArgs = {
  where: VersionWhereInput;
};


export type QueryBlocksArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<BlockOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<BlockWhereInput>;
};


export type QueryBlocksConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<BlockOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<BlockWhereInput>;
};


export type QueryEntitiesArgs = {
  locales: InputMaybe<Array<Locale>>;
  where: Array<EntityWhereInput>;
};


export type QueryLinkArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: LinkWhereUniqueInput;
};


export type QueryLinkVersionArgs = {
  where: VersionWhereInput;
};


export type QueryLinksArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<LinkOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<LinkWhereInput>;
};


export type QueryLinksConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<LinkOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<LinkWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryPostArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PostWhereUniqueInput;
};


export type QueryPostVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPostsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<PostOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<PostWhereInput>;
};


export type QueryPostsConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<PostOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<PostWhereInput>;
};


export type QueryProjectArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProjectWhereUniqueInput;
};


export type QueryProjectVersionArgs = {
  where: VersionWhereInput;
};


export type QueryProjectsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<ProjectOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<ProjectWhereInput>;
};


export type QueryProjectsConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<ProjectOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<ProjectWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<ScheduledOperationOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<ScheduledOperationOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<ScheduledReleaseOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<ScheduledReleaseOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<UserOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy: InputMaybe<UserOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency']['output'];
  b: Scalars['RGBAHue']['output'];
  g: Scalars['RGBAHue']['output'];
  r: Scalars['RGBAHue']['output'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency']['input'];
  b: Scalars['RGBAHue']['input'];
  g: Scalars['RGBAHue']['input'];
  r: Scalars['RGBAHue']['input'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String']['output'];
  /** Returns Markdown representation */
  markdown: Scalars['String']['output'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST']['output'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String']['output'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Entity & Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy: Maybe<User>;
  /** Operation description */
  description: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json']['output'];
  /** The release this operation is scheduled for */
  release: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales: InputMaybe<Array<Locale>>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Block | Link | Post | Project;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  description: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with: InputMaybe<Scalars['String']['input']>;
  errorMessage: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive: InputMaybe<Scalars['Json']['input']>;
  release: InputMaybe<ScheduledReleaseWhereInput>;
  status: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  description: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with: InputMaybe<Scalars['String']['input']>;
  errorMessage: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive: InputMaybe<Scalars['Json']['input']>;
  release: InputMaybe<ScheduledReleaseWhereInput>;
  status: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']['input']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Entity & Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy: Maybe<User>;
  /** Release description */
  description: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean']['output'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean']['output'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy: Maybe<User>;
  /** Release date and time */
  releaseAt: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  locales: InputMaybe<Array<Locale>>;
  orderBy: InputMaybe<ScheduledOperationOrderByInput>;
  skip: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale: InputMaybe<Scalars['Boolean']['input']>;
  locales: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  errorMessage: InputMaybe<Scalars['String']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt: InputMaybe<Scalars['DateTime']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  description: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with: InputMaybe<Scalars['String']['input']>;
  errorMessage: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not: InputMaybe<Scalars['Boolean']['input']>;
  operations_every: InputMaybe<ScheduledOperationWhereInput>;
  operations_none: InputMaybe<ScheduledOperationWhereInput>;
  operations_some: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  releaseAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description: InputMaybe<Scalars['String']['input']>;
  errorMessage: InputMaybe<Scalars['String']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt: InputMaybe<Scalars['DateTime']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description: InputMaybe<Scalars['String']['input']>;
  errorMessage: InputMaybe<Scalars['String']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt: InputMaybe<Scalars['DateTime']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ScheduledRelease document */
  update: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  description: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with: InputMaybe<Scalars['String']['input']>;
  errorMessage: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not: InputMaybe<Scalars['Boolean']['input']>;
  operations_every: InputMaybe<ScheduledOperationWhereInput>;
  operations_none: InputMaybe<ScheduledOperationWhereInput>;
  operations_some: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  releaseAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with: InputMaybe<Scalars['String']['input']>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']['input']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Entity & Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean']['output'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String']['output'];
  /** Profile Picture url */
  picture: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every: InputMaybe<UserWhereStageInput>;
  documentInStages_none: InputMaybe<UserWhereStageInput>;
  documentInStages_some: InputMaybe<UserWhereStageInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not: InputMaybe<Scalars['Boolean']['input']>;
  kind: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in: InputMaybe<Array<InputMaybe<UserKind>>>;
  name: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with: InputMaybe<Scalars['String']['input']>;
  picture: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with: InputMaybe<Scalars['String']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect: InputMaybe<Scalars['Boolean']['input']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']['input']>;
  createdAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every: InputMaybe<UserWhereStageInput>;
  documentInStages_none: InputMaybe<UserWhereStageInput>;
  documentInStages_some: InputMaybe<UserWhereStageInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not: InputMaybe<Scalars['Boolean']['input']>;
  kind: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in: InputMaybe<Array<InputMaybe<UserKind>>>;
  name: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with: InputMaybe<Scalars['String']['input']>;
  picture: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with: InputMaybe<Scalars['String']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']['input']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID']['input'];
  revision: Scalars['Int']['input'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type BlockQueryVariables = Exact<{
  data: BlockWhereUniqueInput;
}>;


export type BlockQuery = { __typename?: 'Query', block: { __typename?: 'Block', content: string } };

export type HomeQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeQuery = { __typename?: 'Query', block: { __typename?: 'Block', content: string }, posts: Array<{ __typename?: 'Post', date: any, excerpt: string, slug: string, title: string, image: { __typename?: 'Asset', height: number, url: string, width: number } }>, projects: Array<{ __typename?: 'Project', content: string, name: string, slug: string, image: { __typename?: 'Asset', height: number, url: string, width: number }, links: Array<{ __typename?: 'ProjectLink', link: string, label: string }> }> };

export type LinksQueryVariables = Exact<{ [key: string]: never; }>;


export type LinksQuery = { __typename?: 'Query', links: Array<{ __typename?: 'Link', description: string, id: string, image: string, tags: Array<string>, title: string, url: string }> };

export type PostQueryVariables = Exact<{
  data: PostWhereUniqueInput;
}>;


export type PostQuery = { __typename?: 'Query', post: { __typename?: 'Post', content: string, date: any, excerpt: string, slug: string, title: string, image: { __typename?: 'Asset', height: number, url: string, width: number } } };

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', date: any, excerpt: string, slug: string, title: string, image: { __typename?: 'Asset', height: number, url: string, width: number } }> };

export type SlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type SlugsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', slug: string }> };

export type ProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', content: string, name: string, slug: string, image: { __typename?: 'Asset', height: number, url: string, width: number }, links: Array<{ __typename?: 'ProjectLink', link: string, label: string }> }> };

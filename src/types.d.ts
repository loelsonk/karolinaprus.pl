export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  __typename?: 'File';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Url = 'url',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
  ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
  ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
  ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
  ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
  ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
  ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
  ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
  ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
  ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
  ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
  ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
  ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
  ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
  ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
  ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
  ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
  ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
  ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION'
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP'
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  ResolutionsOriginalName = 'resolutions___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  SizesOriginalImg = 'sizes___originalImg',
  SizesOriginalName = 'sizes___originalName',
  SizesPresentationWidth = 'sizes___presentationWidth',
  SizesPresentationHeight = 'sizes___presentationHeight',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  __typename?: 'ImageSharpResolutions';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  __typename?: 'ImageSharpSizes';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY'
}

export type Query = {
  __typename?: 'Query';
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  wordpressAcfOptions?: Maybe<Wordpress__Acf_Options>;
  allWordpressAcfOptions: Wordpress__Acf_OptionsConnection;
  wordpressWpSearch?: Maybe<Wordpress__Wp_Search>;
  allWordpressWpSearch: Wordpress__Wp_SearchConnection;
  wordpressWpComments?: Maybe<Wordpress__Wp_Comments>;
  allWordpressWpComments: Wordpress__Wp_CommentsConnection;
  wordpressWpUsers?: Maybe<Wordpress__Wp_Users>;
  allWordpressWpUsers: Wordpress__Wp_UsersConnection;
  wordpressTag?: Maybe<Wordpress__Tag>;
  allWordpressTag: Wordpress__TagConnection;
  wordpressCategory?: Maybe<Wordpress__Category>;
  allWordpressCategory: Wordpress__CategoryConnection;
  wordpressWpTaxonomies?: Maybe<Wordpress__Wp_Taxonomies>;
  allWordpressWpTaxonomies: Wordpress__Wp_TaxonomiesConnection;
  wordpressWpStatuses?: Maybe<Wordpress__Wp_Statuses>;
  allWordpressWpStatuses: Wordpress__Wp_StatusesConnection;
  wordpressWpTypes?: Maybe<Wordpress__Wp_Types>;
  allWordpressWpTypes: Wordpress__Wp_TypesConnection;
  wordpressWpActionMonitor?: Maybe<Wordpress__Wp_Action_Monitor>;
  allWordpressWpActionMonitor: Wordpress__Wp_Action_MonitorConnection;
  wordpressWpMedia?: Maybe<Wordpress__Wp_Media>;
  allWordpressWpMedia: Wordpress__Wp_MediaConnection;
  wordpressPage?: Maybe<Wordpress__Page>;
  allWordpressPage: Wordpress__PageConnection;
  wordpressPost?: Maybe<Wordpress__Post>;
  allWordpressPost: Wordpress__PostConnection;
  wordpressWpApiMenusMenuLocations?: Maybe<Wordpress__Wp_Api_Menus_Menu_Locations>;
  allWordpressWpApiMenusMenuLocations: Wordpress__Wp_Api_Menus_Menu_LocationsConnection;
  wordpressWpApiMenusMenusItems?: Maybe<Wordpress__Wp_Api_Menus_Menus_Items>;
  allWordpressWpApiMenusMenusItems: Wordpress__Wp_Api_Menus_Menus_ItemsConnection;
  wordpressWpApiMenusMenus?: Maybe<Wordpress__Wp_Api_Menus_Menus>;
  allWordpressWpApiMenusMenus: Wordpress__Wp_Api_Menus_MenusConnection;
  wordpressAcfUsers?: Maybe<Wordpress__Acf_Users>;
  allWordpressAcfUsers: Wordpress__Acf_UsersConnection;
  wordpressAcfComments?: Maybe<Wordpress__Acf_Comments>;
  allWordpressAcfComments: Wordpress__Acf_CommentsConnection;
  wordpressAcfCategories?: Maybe<Wordpress__Acf_Categories>;
  allWordpressAcfCategories: Wordpress__Acf_CategoriesConnection;
  wordpressAcfActionMonitor?: Maybe<Wordpress__Acf_Action_Monitor>;
  allWordpressAcfActionMonitor: Wordpress__Acf_Action_MonitorConnection;
  wordpressAcfMedia?: Maybe<Wordpress__Acf_Media>;
  allWordpressAcfMedia: Wordpress__Acf_MediaConnection;
  wordpressAcfPages?: Maybe<Wordpress__Acf_Pages>;
  allWordpressAcfPages: Wordpress__Acf_PagesConnection;
  wordpressAcfPosts?: Maybe<Wordpress__Acf_Posts>;
  allWordpressAcfPosts: Wordpress__Acf_PostsConnection;
  wordpressSiteMetadata?: Maybe<Wordpress__Site_Metadata>;
  allWordpressSiteMetadata: Wordpress__Site_MetadataConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressAcfOptionsArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllWordpressAcfOptionsArgs = {
  filter?: Maybe<Wordpress__Acf_OptionsFilterInput>;
  sort?: Maybe<Wordpress__Acf_OptionsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressWpSearchArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  subtype?: Maybe<StringQueryOperatorInput>;
  _links?: Maybe<Wordpress__Wp_Search_LinksFilterInput>;
};


export type QueryAllWordpressWpSearchArgs = {
  filter?: Maybe<Wordpress__Wp_SearchFilterInput>;
  sort?: Maybe<Wordpress__Wp_SearchSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressWpCommentsArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  post?: Maybe<IntQueryOperatorInput>;
  wordpress_parent?: Maybe<IntQueryOperatorInput>;
  author?: Maybe<IntQueryOperatorInput>;
  author_name?: Maybe<StringQueryOperatorInput>;
  author_url?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  author_avatar_urls?: Maybe<Wordpress__Wp_CommentsAuthor_Avatar_UrlsFilterInput>;
  _links?: Maybe<Wordpress__Wp_Comments_LinksFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllWordpressWpCommentsArgs = {
  filter?: Maybe<Wordpress__Wp_CommentsFilterInput>;
  sort?: Maybe<Wordpress__Wp_CommentsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressWpUsersArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  avatar_urls?: Maybe<Wordpress__Wp_UsersAvatar_UrlsFilterInput>;
  _links?: Maybe<Wordpress__Wp_Users_LinksFilterInput>;
  authored_wordpress__PAGE?: Maybe<Wordpress__PageFilterListInput>;
  authored_wordpress__wp_media?: Maybe<Wordpress__Wp_MediaFilterListInput>;
  path?: Maybe<StringQueryOperatorInput>;
  authored_wordpress__POST?: Maybe<Wordpress__PostFilterListInput>;
};


export type QueryAllWordpressWpUsersArgs = {
  filter?: Maybe<Wordpress__Wp_UsersFilterInput>;
  sort?: Maybe<Wordpress__Wp_UsersSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressTagArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  count?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  _links?: Maybe<Wordpress__Tag_LinksFilterInput>;
  taxonomy?: Maybe<Wordpress__Wp_TaxonomiesFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllWordpressTagArgs = {
  filter?: Maybe<Wordpress__TagFilterInput>;
  sort?: Maybe<Wordpress__TagSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressCategoryArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  count?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  wordpress_parent?: Maybe<IntQueryOperatorInput>;
  _links?: Maybe<Wordpress__Category_LinksFilterInput>;
  taxonomy?: Maybe<Wordpress__Wp_TaxonomiesFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllWordpressCategoryArgs = {
  filter?: Maybe<Wordpress__CategoryFilterInput>;
  sort?: Maybe<Wordpress__CategorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressWpTaxonomiesArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  types?: Maybe<StringQueryOperatorInput>;
  hierarchical?: Maybe<BooleanQueryOperatorInput>;
  rest_base?: Maybe<StringQueryOperatorInput>;
  _links?: Maybe<Wordpress__Wp_Taxonomies_LinksFilterInput>;
};


export type QueryAllWordpressWpTaxonomiesArgs = {
  filter?: Maybe<Wordpress__Wp_TaxonomiesFilterInput>;
  sort?: Maybe<Wordpress__Wp_TaxonomiesSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressWpStatusesArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  public?: Maybe<BooleanQueryOperatorInput>;
  queryable?: Maybe<BooleanQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  date_floating?: Maybe<BooleanQueryOperatorInput>;
  _links?: Maybe<Wordpress__Wp_Statuses_LinksFilterInput>;
};


export type QueryAllWordpressWpStatusesArgs = {
  filter?: Maybe<Wordpress__Wp_StatusesFilterInput>;
  sort?: Maybe<Wordpress__Wp_StatusesSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressWpTypesArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  hierarchical?: Maybe<BooleanQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  taxonomies?: Maybe<StringQueryOperatorInput>;
  rest_base?: Maybe<StringQueryOperatorInput>;
  _links?: Maybe<Wordpress__Wp_Types_LinksFilterInput>;
};


export type QueryAllWordpressWpTypesArgs = {
  filter?: Maybe<Wordpress__Wp_TypesFilterInput>;
  sort?: Maybe<Wordpress__Wp_TypesSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressWpActionMonitorArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<StringQueryOperatorInput>;
  _links?: Maybe<Wordpress__Wp_Action_Monitor_LinksFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllWordpressWpActionMonitorArgs = {
  filter?: Maybe<Wordpress__Wp_Action_MonitorFilterInput>;
  sort?: Maybe<Wordpress__Wp_Action_MonitorSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressWpMediaArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  comment_status?: Maybe<StringQueryOperatorInput>;
  ping_status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  caption?: Maybe<StringQueryOperatorInput>;
  alt_text?: Maybe<StringQueryOperatorInput>;
  media_type?: Maybe<StringQueryOperatorInput>;
  mime_type?: Maybe<StringQueryOperatorInput>;
  media_details?: Maybe<Wordpress__Wp_MediaMedia_DetailsFilterInput>;
  source_url?: Maybe<StringQueryOperatorInput>;
  _links?: Maybe<Wordpress__Wp_Media_LinksFilterInput>;
  author?: Maybe<Wordpress__Wp_UsersFilterInput>;
  guid?: Maybe<Wordpress__Wp_MediaFilterInput>;
  localFile?: Maybe<FileFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllWordpressWpMediaArgs = {
  filter?: Maybe<Wordpress__Wp_MediaFilterInput>;
  sort?: Maybe<Wordpress__Wp_MediaSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressPageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  wordpress_parent?: Maybe<IntQueryOperatorInput>;
  menu_order?: Maybe<IntQueryOperatorInput>;
  comment_status?: Maybe<StringQueryOperatorInput>;
  ping_status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<StringQueryOperatorInput>;
  _links?: Maybe<Wordpress__Page_LinksFilterInput>;
  author?: Maybe<Wordpress__Wp_UsersFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllWordpressPageArgs = {
  filter?: Maybe<Wordpress__PageFilterInput>;
  sort?: Maybe<Wordpress__PageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressPostArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  comment_status?: Maybe<StringQueryOperatorInput>;
  ping_status?: Maybe<StringQueryOperatorInput>;
  sticky?: Maybe<BooleanQueryOperatorInput>;
  template?: Maybe<StringQueryOperatorInput>;
  format?: Maybe<StringQueryOperatorInput>;
  _links?: Maybe<Wordpress__Post_LinksFilterInput>;
  author?: Maybe<Wordpress__Wp_UsersFilterInput>;
  categories?: Maybe<Wordpress__CategoryFilterListInput>;
  featured_media?: Maybe<Wordpress__Wp_MediaFilterInput>;
  jetpack_featured_media_url?: Maybe<Wordpress__Wp_MediaFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<Wordpress__TagFilterListInput>;
};


export type QueryAllWordpressPostArgs = {
  filter?: Maybe<Wordpress__PostFilterInput>;
  sort?: Maybe<Wordpress__PostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressWpApiMenusMenuLocationsArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  meta?: Maybe<Wordpress__Wp_Api_Menus_Menu_LocationsMetaFilterInput>;
};


export type QueryAllWordpressWpApiMenusMenuLocationsArgs = {
  filter?: Maybe<Wordpress__Wp_Api_Menus_Menu_LocationsFilterInput>;
  sort?: Maybe<Wordpress__Wp_Api_Menus_Menu_LocationsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressWpApiMenusMenusItemsArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  count?: Maybe<IntQueryOperatorInput>;
  items?: Maybe<Wordpress__Wp_Api_Menus_Menus_ItemsItemsFilterListInput>;
  meta?: Maybe<Wordpress__Wp_Api_Menus_Menus_ItemsMetaFilterInput>;
};


export type QueryAllWordpressWpApiMenusMenusItemsArgs = {
  filter?: Maybe<Wordpress__Wp_Api_Menus_Menus_ItemsFilterInput>;
  sort?: Maybe<Wordpress__Wp_Api_Menus_Menus_ItemsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressWpApiMenusMenusArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  term_id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  term_group?: Maybe<IntQueryOperatorInput>;
  term_taxonomy_id?: Maybe<IntQueryOperatorInput>;
  taxonomy?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  wordpress_parent?: Maybe<IntQueryOperatorInput>;
  count?: Maybe<IntQueryOperatorInput>;
  filter?: Maybe<StringQueryOperatorInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  meta?: Maybe<Wordpress__Wp_Api_Menus_MenusMetaFilterInput>;
};


export type QueryAllWordpressWpApiMenusMenusArgs = {
  filter?: Maybe<Wordpress__Wp_Api_Menus_MenusFilterInput>;
  sort?: Maybe<Wordpress__Wp_Api_Menus_MenusSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressAcfUsersArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
};


export type QueryAllWordpressAcfUsersArgs = {
  filter?: Maybe<Wordpress__Acf_UsersFilterInput>;
  sort?: Maybe<Wordpress__Acf_UsersSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressAcfCommentsArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
};


export type QueryAllWordpressAcfCommentsArgs = {
  filter?: Maybe<Wordpress__Acf_CommentsFilterInput>;
  sort?: Maybe<Wordpress__Acf_CommentsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressAcfCategoriesArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
};


export type QueryAllWordpressAcfCategoriesArgs = {
  filter?: Maybe<Wordpress__Acf_CategoriesFilterInput>;
  sort?: Maybe<Wordpress__Acf_CategoriesSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressAcfActionMonitorArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
};


export type QueryAllWordpressAcfActionMonitorArgs = {
  filter?: Maybe<Wordpress__Acf_Action_MonitorFilterInput>;
  sort?: Maybe<Wordpress__Acf_Action_MonitorSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressAcfMediaArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
};


export type QueryAllWordpressAcfMediaArgs = {
  filter?: Maybe<Wordpress__Acf_MediaFilterInput>;
  sort?: Maybe<Wordpress__Acf_MediaSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressAcfPagesArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
};


export type QueryAllWordpressAcfPagesArgs = {
  filter?: Maybe<Wordpress__Acf_PagesFilterInput>;
  sort?: Maybe<Wordpress__Acf_PagesSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressAcfPostsArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
};


export type QueryAllWordpressAcfPostsArgs = {
  filter?: Maybe<Wordpress__Acf_PostsFilterInput>;
  sort?: Maybe<Wordpress__Acf_PostsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWordpressSiteMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  home?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllWordpressSiteMetadataArgs = {
  filter?: Maybe<Wordpress__Site_MetadataFilterInput>;
  sort?: Maybe<Wordpress__Site_MetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  BuildTime = 'buildTime'
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataDescription = 'siteMetadata___description',
  Port = 'port',
  Host = 'host',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: 'SitePageContext';
  id?: Maybe<Scalars['String']>;
  pageNumber?: Maybe<Scalars['Int']>;
  humanPageNumber?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  numberOfPages?: Maybe<Scalars['Int']>;
  previousPagePath?: Maybe<Scalars['String']>;
  nextPagePath?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  pageNumber?: Maybe<IntQueryOperatorInput>;
  humanPageNumber?: Maybe<IntQueryOperatorInput>;
  skip?: Maybe<IntQueryOperatorInput>;
  limit?: Maybe<IntQueryOperatorInput>;
  numberOfPages?: Maybe<IntQueryOperatorInput>;
  previousPagePath?: Maybe<StringQueryOperatorInput>;
  nextPagePath?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Path = 'path',
  Component = 'component',
  InternalComponentName = 'internalComponentName',
  ComponentChunkName = 'componentChunkName',
  MatchPath = 'matchPath',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextId = 'context___id',
  ContextPageNumber = 'context___pageNumber',
  ContextHumanPageNumber = 'context___humanPageNumber',
  ContextSkip = 'context___skip',
  ContextLimit = 'context___limit',
  ContextNumberOfPages = 'context___numberOfPages',
  ContextPreviousPagePath = 'context___previousPagePath',
  ContextNextPagePath = 'context___nextPagePath',
  ContextName = 'context___name',
  ContextSlug = 'context___slug',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsCacheBustingMode = 'pluginCreator___pluginOptions___cache_busting_mode',
  PluginCreatorPluginOptionsIncludeFavicon = 'pluginCreator___pluginOptions___include_favicon',
  PluginCreatorPluginOptionsLegacy = 'pluginCreator___pluginOptions___legacy',
  PluginCreatorPluginOptionsThemeColorInHead = 'pluginCreator___pluginOptions___theme_color_in_head',
  PluginCreatorPluginOptionsWorkboxConfigGlobPatterns = 'pluginCreator___pluginOptions___workboxConfig___globPatterns',
  PluginCreatorPluginOptions = 'pluginCreator___pluginOptions____',
  PluginCreatorPluginOptionsIsTsx = 'pluginCreator___pluginOptions___isTSX',
  PluginCreatorPluginOptionsJsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  PluginCreatorPluginOptionsAllExtensions = 'pluginCreator___pluginOptions___allExtensions',
  PluginCreatorPluginOptionsBaseUrl = 'pluginCreator___pluginOptions___baseUrl',
  PluginCreatorPluginOptionsHostingWpcom = 'pluginCreator___pluginOptions___hostingWPCOM',
  PluginCreatorPluginOptionsProtocol = 'pluginCreator___pluginOptions___protocol',
  PluginCreatorPluginOptionsUseAcf = 'pluginCreator___pluginOptions___useACF',
  PluginCreatorPluginOptionsVerboseOutput = 'pluginCreator___pluginOptions___verboseOutput',
  PluginCreatorPluginOptionsDevelop = 'pluginCreator___pluginOptions___develop',
  PluginCreatorPluginOptionsPurgeOnly = 'pluginCreator___pluginOptions___purgeOnly',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsCacheBustingMode = 'pluginOptions___cache_busting_mode',
  PluginOptionsIncludeFavicon = 'pluginOptions___include_favicon',
  PluginOptionsLegacy = 'pluginOptions___legacy',
  PluginOptionsThemeColorInHead = 'pluginOptions___theme_color_in_head',
  PluginOptionsWorkboxConfigGlobPatterns = 'pluginOptions___workboxConfig___globPatterns',
  PluginOptions = 'pluginOptions____',
  PluginOptionsIsTsx = 'pluginOptions___isTSX',
  PluginOptionsJsxPragma = 'pluginOptions___jsxPragma',
  PluginOptionsAllExtensions = 'pluginOptions___allExtensions',
  PluginOptionsEnvProductionPolicy = 'pluginOptions___env___production___policy',
  PluginOptionsEnvDevelopmentPolicy = 'pluginOptions___env___development___policy',
  PluginOptionsEnvBranchDeployPolicy = 'pluginOptions___env___branch_deploy___policy',
  PluginOptionsEnvDeployPreviewPolicy = 'pluginOptions___env___deploy_preview___policy',
  PluginOptionsBaseUrl = 'pluginOptions___baseUrl',
  PluginOptionsHostingWpcom = 'pluginOptions___hostingWPCOM',
  PluginOptionsProtocol = 'pluginOptions___protocol',
  PluginOptionsUseAcf = 'pluginOptions___useACF',
  PluginOptionsVerboseOutput = 'pluginOptions___verboseOutput',
  PluginOptionsDevelop = 'pluginOptions___develop',
  PluginOptionsPurgeOnly = 'pluginOptions___purgeOnly',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  workboxConfig?: Maybe<SitePluginPluginOptionsWorkboxConfig>;
  _?: Maybe<Scalars['String']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  env?: Maybe<SitePluginPluginOptionsEnv>;
  baseUrl?: Maybe<Scalars['String']>;
  hostingWPCOM?: Maybe<Scalars['Boolean']>;
  protocol?: Maybe<Scalars['String']>;
  useACF?: Maybe<Scalars['Boolean']>;
  verboseOutput?: Maybe<Scalars['Boolean']>;
  develop?: Maybe<Scalars['Boolean']>;
  purgeOnly?: Maybe<Array<Maybe<Scalars['String']>>>;
  path?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsEnv = {
  __typename?: 'SitePluginPluginOptionsEnv';
  production?: Maybe<SitePluginPluginOptionsEnvProduction>;
  development?: Maybe<SitePluginPluginOptionsEnvDevelopment>;
  branch_deploy?: Maybe<SitePluginPluginOptionsEnvBranch_Deploy>;
  deploy_preview?: Maybe<SitePluginPluginOptionsEnvDeploy_Preview>;
};

export type SitePluginPluginOptionsEnvBranch_Deploy = {
  __typename?: 'SitePluginPluginOptionsEnvBranch_deploy';
  policy?: Maybe<Array<Maybe<SitePluginPluginOptionsEnvBranch_DeployPolicy>>>;
};

export type SitePluginPluginOptionsEnvBranch_DeployFilterInput = {
  policy?: Maybe<SitePluginPluginOptionsEnvBranch_DeployPolicyFilterListInput>;
};

export type SitePluginPluginOptionsEnvBranch_DeployPolicy = {
  __typename?: 'SitePluginPluginOptionsEnvBranch_deployPolicy';
  userAgent?: Maybe<Scalars['String']>;
  disallow?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsEnvBranch_DeployPolicyFilterInput = {
  userAgent?: Maybe<StringQueryOperatorInput>;
  disallow?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsEnvBranch_DeployPolicyFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsEnvBranch_DeployPolicyFilterInput>;
};

export type SitePluginPluginOptionsEnvDeploy_Preview = {
  __typename?: 'SitePluginPluginOptionsEnvDeploy_preview';
  policy?: Maybe<Array<Maybe<SitePluginPluginOptionsEnvDeploy_PreviewPolicy>>>;
};

export type SitePluginPluginOptionsEnvDeploy_PreviewFilterInput = {
  policy?: Maybe<SitePluginPluginOptionsEnvDeploy_PreviewPolicyFilterListInput>;
};

export type SitePluginPluginOptionsEnvDeploy_PreviewPolicy = {
  __typename?: 'SitePluginPluginOptionsEnvDeploy_previewPolicy';
  userAgent?: Maybe<Scalars['String']>;
  disallow?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsEnvDeploy_PreviewPolicyFilterInput = {
  userAgent?: Maybe<StringQueryOperatorInput>;
  disallow?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsEnvDeploy_PreviewPolicyFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsEnvDeploy_PreviewPolicyFilterInput>;
};

export type SitePluginPluginOptionsEnvDevelopment = {
  __typename?: 'SitePluginPluginOptionsEnvDevelopment';
  policy?: Maybe<Array<Maybe<SitePluginPluginOptionsEnvDevelopmentPolicy>>>;
};

export type SitePluginPluginOptionsEnvDevelopmentFilterInput = {
  policy?: Maybe<SitePluginPluginOptionsEnvDevelopmentPolicyFilterListInput>;
};

export type SitePluginPluginOptionsEnvDevelopmentPolicy = {
  __typename?: 'SitePluginPluginOptionsEnvDevelopmentPolicy';
  userAgent?: Maybe<Scalars['String']>;
  disallow?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsEnvDevelopmentPolicyFilterInput = {
  userAgent?: Maybe<StringQueryOperatorInput>;
  disallow?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsEnvDevelopmentPolicyFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsEnvDevelopmentPolicyFilterInput>;
};

export type SitePluginPluginOptionsEnvFilterInput = {
  production?: Maybe<SitePluginPluginOptionsEnvProductionFilterInput>;
  development?: Maybe<SitePluginPluginOptionsEnvDevelopmentFilterInput>;
  branch_deploy?: Maybe<SitePluginPluginOptionsEnvBranch_DeployFilterInput>;
  deploy_preview?: Maybe<SitePluginPluginOptionsEnvDeploy_PreviewFilterInput>;
};

export type SitePluginPluginOptionsEnvProduction = {
  __typename?: 'SitePluginPluginOptionsEnvProduction';
  policy?: Maybe<Array<Maybe<SitePluginPluginOptionsEnvProductionPolicy>>>;
};

export type SitePluginPluginOptionsEnvProductionFilterInput = {
  policy?: Maybe<SitePluginPluginOptionsEnvProductionPolicyFilterListInput>;
};

export type SitePluginPluginOptionsEnvProductionPolicy = {
  __typename?: 'SitePluginPluginOptionsEnvProductionPolicy';
  userAgent?: Maybe<Scalars['String']>;
  disallow?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsEnvProductionPolicyFilterInput = {
  userAgent?: Maybe<StringQueryOperatorInput>;
  disallow?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsEnvProductionPolicyFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsEnvProductionPolicyFilterInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  workboxConfig?: Maybe<SitePluginPluginOptionsWorkboxConfigFilterInput>;
  _?: Maybe<StringQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  env?: Maybe<SitePluginPluginOptionsEnvFilterInput>;
  baseUrl?: Maybe<StringQueryOperatorInput>;
  hostingWPCOM?: Maybe<BooleanQueryOperatorInput>;
  protocol?: Maybe<StringQueryOperatorInput>;
  useACF?: Maybe<BooleanQueryOperatorInput>;
  verboseOutput?: Maybe<BooleanQueryOperatorInput>;
  develop?: Maybe<BooleanQueryOperatorInput>;
  purgeOnly?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsWorkboxConfig = {
  __typename?: 'SitePluginPluginOptionsWorkboxConfig';
  globPatterns?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsWorkboxConfigFilterInput = {
  globPatterns?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type Wordpress__Acf_Action_Monitor = Node & {
  __typename?: 'wordpress__acf_action_monitor';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['Int']>;
};

export type Wordpress__Acf_Action_MonitorConnection = {
  __typename?: 'wordpress__acf_action_monitorConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Acf_Action_MonitorEdge>;
  nodes: Array<Wordpress__Acf_Action_Monitor>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__Acf_Action_MonitorGroupConnection>;
};


export type Wordpress__Acf_Action_MonitorConnectionDistinctArgs = {
  field: Wordpress__Acf_Action_MonitorFieldsEnum;
};


export type Wordpress__Acf_Action_MonitorConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__Acf_Action_MonitorFieldsEnum;
};

export type Wordpress__Acf_Action_MonitorEdge = {
  __typename?: 'wordpress__acf_action_monitorEdge';
  next?: Maybe<Wordpress__Acf_Action_Monitor>;
  node: Wordpress__Acf_Action_Monitor;
  previous?: Maybe<Wordpress__Acf_Action_Monitor>;
};

export enum Wordpress__Acf_Action_MonitorFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  WordpressId = 'wordpress_id'
}

export type Wordpress__Acf_Action_MonitorFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
};

export type Wordpress__Acf_Action_MonitorGroupConnection = {
  __typename?: 'wordpress__acf_action_monitorGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Acf_Action_MonitorEdge>;
  nodes: Array<Wordpress__Acf_Action_Monitor>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__Acf_Action_MonitorSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_Action_MonitorFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__Acf_Categories = Node & {
  __typename?: 'wordpress__acf_categories';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['Int']>;
};

export type Wordpress__Acf_CategoriesConnection = {
  __typename?: 'wordpress__acf_categoriesConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Acf_CategoriesEdge>;
  nodes: Array<Wordpress__Acf_Categories>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__Acf_CategoriesGroupConnection>;
};


export type Wordpress__Acf_CategoriesConnectionDistinctArgs = {
  field: Wordpress__Acf_CategoriesFieldsEnum;
};


export type Wordpress__Acf_CategoriesConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__Acf_CategoriesFieldsEnum;
};

export type Wordpress__Acf_CategoriesEdge = {
  __typename?: 'wordpress__acf_categoriesEdge';
  next?: Maybe<Wordpress__Acf_Categories>;
  node: Wordpress__Acf_Categories;
  previous?: Maybe<Wordpress__Acf_Categories>;
};

export enum Wordpress__Acf_CategoriesFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  WordpressId = 'wordpress_id'
}

export type Wordpress__Acf_CategoriesFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
};

export type Wordpress__Acf_CategoriesGroupConnection = {
  __typename?: 'wordpress__acf_categoriesGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Acf_CategoriesEdge>;
  nodes: Array<Wordpress__Acf_Categories>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__Acf_CategoriesSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_CategoriesFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__Acf_Comments = Node & {
  __typename?: 'wordpress__acf_comments';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['Int']>;
};

export type Wordpress__Acf_CommentsConnection = {
  __typename?: 'wordpress__acf_commentsConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Acf_CommentsEdge>;
  nodes: Array<Wordpress__Acf_Comments>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__Acf_CommentsGroupConnection>;
};


export type Wordpress__Acf_CommentsConnectionDistinctArgs = {
  field: Wordpress__Acf_CommentsFieldsEnum;
};


export type Wordpress__Acf_CommentsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__Acf_CommentsFieldsEnum;
};

export type Wordpress__Acf_CommentsEdge = {
  __typename?: 'wordpress__acf_commentsEdge';
  next?: Maybe<Wordpress__Acf_Comments>;
  node: Wordpress__Acf_Comments;
  previous?: Maybe<Wordpress__Acf_Comments>;
};

export enum Wordpress__Acf_CommentsFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  WordpressId = 'wordpress_id'
}

export type Wordpress__Acf_CommentsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
};

export type Wordpress__Acf_CommentsGroupConnection = {
  __typename?: 'wordpress__acf_commentsGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Acf_CommentsEdge>;
  nodes: Array<Wordpress__Acf_Comments>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__Acf_CommentsSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_CommentsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__Acf_Media = Node & {
  __typename?: 'wordpress__acf_media';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['Int']>;
};

export type Wordpress__Acf_MediaConnection = {
  __typename?: 'wordpress__acf_mediaConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Acf_MediaEdge>;
  nodes: Array<Wordpress__Acf_Media>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__Acf_MediaGroupConnection>;
};


export type Wordpress__Acf_MediaConnectionDistinctArgs = {
  field: Wordpress__Acf_MediaFieldsEnum;
};


export type Wordpress__Acf_MediaConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__Acf_MediaFieldsEnum;
};

export type Wordpress__Acf_MediaEdge = {
  __typename?: 'wordpress__acf_mediaEdge';
  next?: Maybe<Wordpress__Acf_Media>;
  node: Wordpress__Acf_Media;
  previous?: Maybe<Wordpress__Acf_Media>;
};

export enum Wordpress__Acf_MediaFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  WordpressId = 'wordpress_id'
}

export type Wordpress__Acf_MediaFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
};

export type Wordpress__Acf_MediaGroupConnection = {
  __typename?: 'wordpress__acf_mediaGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Acf_MediaEdge>;
  nodes: Array<Wordpress__Acf_Media>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__Acf_MediaSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_MediaFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__Acf_Options = Node & {
  __typename?: 'wordpress__acf_options';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['String']>;
};

export type Wordpress__Acf_OptionsConnection = {
  __typename?: 'wordpress__acf_optionsConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Acf_OptionsEdge>;
  nodes: Array<Wordpress__Acf_Options>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__Acf_OptionsGroupConnection>;
};


export type Wordpress__Acf_OptionsConnectionDistinctArgs = {
  field: Wordpress__Acf_OptionsFieldsEnum;
};


export type Wordpress__Acf_OptionsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__Acf_OptionsFieldsEnum;
};

export type Wordpress__Acf_OptionsEdge = {
  __typename?: 'wordpress__acf_optionsEdge';
  next?: Maybe<Wordpress__Acf_Options>;
  node: Wordpress__Acf_Options;
  previous?: Maybe<Wordpress__Acf_Options>;
};

export enum Wordpress__Acf_OptionsFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  WordpressId = 'wordpress_id'
}

export type Wordpress__Acf_OptionsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Acf_OptionsGroupConnection = {
  __typename?: 'wordpress__acf_optionsGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Acf_OptionsEdge>;
  nodes: Array<Wordpress__Acf_Options>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__Acf_OptionsSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_OptionsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__Acf_Pages = Node & {
  __typename?: 'wordpress__acf_pages';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['Int']>;
};

export type Wordpress__Acf_PagesConnection = {
  __typename?: 'wordpress__acf_pagesConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Acf_PagesEdge>;
  nodes: Array<Wordpress__Acf_Pages>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__Acf_PagesGroupConnection>;
};


export type Wordpress__Acf_PagesConnectionDistinctArgs = {
  field: Wordpress__Acf_PagesFieldsEnum;
};


export type Wordpress__Acf_PagesConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__Acf_PagesFieldsEnum;
};

export type Wordpress__Acf_PagesEdge = {
  __typename?: 'wordpress__acf_pagesEdge';
  next?: Maybe<Wordpress__Acf_Pages>;
  node: Wordpress__Acf_Pages;
  previous?: Maybe<Wordpress__Acf_Pages>;
};

export enum Wordpress__Acf_PagesFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  WordpressId = 'wordpress_id'
}

export type Wordpress__Acf_PagesFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
};

export type Wordpress__Acf_PagesGroupConnection = {
  __typename?: 'wordpress__acf_pagesGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Acf_PagesEdge>;
  nodes: Array<Wordpress__Acf_Pages>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__Acf_PagesSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_PagesFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__Acf_Posts = Node & {
  __typename?: 'wordpress__acf_posts';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['Int']>;
};

export type Wordpress__Acf_PostsConnection = {
  __typename?: 'wordpress__acf_postsConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Acf_PostsEdge>;
  nodes: Array<Wordpress__Acf_Posts>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__Acf_PostsGroupConnection>;
};


export type Wordpress__Acf_PostsConnectionDistinctArgs = {
  field: Wordpress__Acf_PostsFieldsEnum;
};


export type Wordpress__Acf_PostsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__Acf_PostsFieldsEnum;
};

export type Wordpress__Acf_PostsEdge = {
  __typename?: 'wordpress__acf_postsEdge';
  next?: Maybe<Wordpress__Acf_Posts>;
  node: Wordpress__Acf_Posts;
  previous?: Maybe<Wordpress__Acf_Posts>;
};

export enum Wordpress__Acf_PostsFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  WordpressId = 'wordpress_id'
}

export type Wordpress__Acf_PostsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
};

export type Wordpress__Acf_PostsGroupConnection = {
  __typename?: 'wordpress__acf_postsGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Acf_PostsEdge>;
  nodes: Array<Wordpress__Acf_Posts>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__Acf_PostsSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_PostsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__Acf_Users = Node & {
  __typename?: 'wordpress__acf_users';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['Int']>;
};

export type Wordpress__Acf_UsersConnection = {
  __typename?: 'wordpress__acf_usersConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Acf_UsersEdge>;
  nodes: Array<Wordpress__Acf_Users>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__Acf_UsersGroupConnection>;
};


export type Wordpress__Acf_UsersConnectionDistinctArgs = {
  field: Wordpress__Acf_UsersFieldsEnum;
};


export type Wordpress__Acf_UsersConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__Acf_UsersFieldsEnum;
};

export type Wordpress__Acf_UsersEdge = {
  __typename?: 'wordpress__acf_usersEdge';
  next?: Maybe<Wordpress__Acf_Users>;
  node: Wordpress__Acf_Users;
  previous?: Maybe<Wordpress__Acf_Users>;
};

export enum Wordpress__Acf_UsersFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  WordpressId = 'wordpress_id'
}

export type Wordpress__Acf_UsersFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
};

export type Wordpress__Acf_UsersGroupConnection = {
  __typename?: 'wordpress__acf_usersGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Acf_UsersEdge>;
  nodes: Array<Wordpress__Acf_Users>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__Acf_UsersSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_UsersFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__Category = Node & {
  __typename?: 'wordpress__CATEGORY';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  wordpress_parent?: Maybe<Scalars['Int']>;
  _links?: Maybe<Wordpress__Category_Links>;
  taxonomy?: Maybe<Wordpress__Wp_Taxonomies>;
  path?: Maybe<Scalars['String']>;
};

export type Wordpress__Category_Links = {
  __typename?: 'wordpress__CATEGORY_links';
  self?: Maybe<Array<Maybe<Wordpress__Category_LinksSelf>>>;
  collection?: Maybe<Array<Maybe<Wordpress__Category_LinksCollection>>>;
  about?: Maybe<Array<Maybe<Wordpress__Category_LinksAbout>>>;
  wp_post_type?: Maybe<Array<Maybe<Wordpress__Category_LinksWp_Post_Type>>>;
  curies?: Maybe<Array<Maybe<Wordpress__Category_LinksCuries>>>;
};

export type Wordpress__Category_LinksAbout = {
  __typename?: 'wordpress__CATEGORY_linksAbout';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Category_LinksAboutFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Category_LinksAboutFilterListInput = {
  elemMatch?: Maybe<Wordpress__Category_LinksAboutFilterInput>;
};

export type Wordpress__Category_LinksCollection = {
  __typename?: 'wordpress__CATEGORY_linksCollection';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Category_LinksCollectionFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Category_LinksCollectionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Category_LinksCollectionFilterInput>;
};

export type Wordpress__Category_LinksCuries = {
  __typename?: 'wordpress__CATEGORY_linksCuries';
  name?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  templated?: Maybe<Scalars['Boolean']>;
};

export type Wordpress__Category_LinksCuriesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  templated?: Maybe<BooleanQueryOperatorInput>;
};

export type Wordpress__Category_LinksCuriesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Category_LinksCuriesFilterInput>;
};

export type Wordpress__Category_LinksFilterInput = {
  self?: Maybe<Wordpress__Category_LinksSelfFilterListInput>;
  collection?: Maybe<Wordpress__Category_LinksCollectionFilterListInput>;
  about?: Maybe<Wordpress__Category_LinksAboutFilterListInput>;
  wp_post_type?: Maybe<Wordpress__Category_LinksWp_Post_TypeFilterListInput>;
  curies?: Maybe<Wordpress__Category_LinksCuriesFilterListInput>;
};

export type Wordpress__Category_LinksSelf = {
  __typename?: 'wordpress__CATEGORY_linksSelf';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Category_LinksSelfFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Category_LinksSelfFilterListInput = {
  elemMatch?: Maybe<Wordpress__Category_LinksSelfFilterInput>;
};

export type Wordpress__Category_LinksWp_Post_Type = {
  __typename?: 'wordpress__CATEGORY_linksWp_post_type';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Category_LinksWp_Post_TypeFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Category_LinksWp_Post_TypeFilterListInput = {
  elemMatch?: Maybe<Wordpress__Category_LinksWp_Post_TypeFilterInput>;
};

export type Wordpress__CategoryConnection = {
  __typename?: 'wordpress__CATEGORYConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__CategoryEdge>;
  nodes: Array<Wordpress__Category>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__CategoryGroupConnection>;
};


export type Wordpress__CategoryConnectionDistinctArgs = {
  field: Wordpress__CategoryFieldsEnum;
};


export type Wordpress__CategoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__CategoryFieldsEnum;
};

export type Wordpress__CategoryEdge = {
  __typename?: 'wordpress__CATEGORYEdge';
  next?: Maybe<Wordpress__Category>;
  node: Wordpress__Category;
  previous?: Maybe<Wordpress__Category>;
};

export enum Wordpress__CategoryFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  WordpressId = 'wordpress_id',
  Count = 'count',
  Description = 'description',
  Link = 'link',
  Name = 'name',
  Slug = 'slug',
  WordpressParent = 'wordpress_parent',
  LinksSelf = '_links___self',
  LinksSelfHref = '_links___self___href',
  LinksCollection = '_links___collection',
  LinksCollectionHref = '_links___collection___href',
  LinksAbout = '_links___about',
  LinksAboutHref = '_links___about___href',
  LinksWpPostType = '_links___wp_post_type',
  LinksWpPostTypeHref = '_links___wp_post_type___href',
  LinksCuries = '_links___curies',
  LinksCuriesName = '_links___curies___name',
  LinksCuriesHref = '_links___curies___href',
  LinksCuriesTemplated = '_links___curies___templated',
  TaxonomyId = 'taxonomy___id',
  TaxonomyParentId = 'taxonomy___parent___id',
  TaxonomyParentParentId = 'taxonomy___parent___parent___id',
  TaxonomyParentParentChildren = 'taxonomy___parent___parent___children',
  TaxonomyParentChildren = 'taxonomy___parent___children',
  TaxonomyParentChildrenId = 'taxonomy___parent___children___id',
  TaxonomyParentChildrenChildren = 'taxonomy___parent___children___children',
  TaxonomyParentInternalContent = 'taxonomy___parent___internal___content',
  TaxonomyParentInternalContentDigest = 'taxonomy___parent___internal___contentDigest',
  TaxonomyParentInternalDescription = 'taxonomy___parent___internal___description',
  TaxonomyParentInternalFieldOwners = 'taxonomy___parent___internal___fieldOwners',
  TaxonomyParentInternalIgnoreType = 'taxonomy___parent___internal___ignoreType',
  TaxonomyParentInternalMediaType = 'taxonomy___parent___internal___mediaType',
  TaxonomyParentInternalOwner = 'taxonomy___parent___internal___owner',
  TaxonomyParentInternalType = 'taxonomy___parent___internal___type',
  TaxonomyChildren = 'taxonomy___children',
  TaxonomyChildrenId = 'taxonomy___children___id',
  TaxonomyChildrenParentId = 'taxonomy___children___parent___id',
  TaxonomyChildrenParentChildren = 'taxonomy___children___parent___children',
  TaxonomyChildrenChildren = 'taxonomy___children___children',
  TaxonomyChildrenChildrenId = 'taxonomy___children___children___id',
  TaxonomyChildrenChildrenChildren = 'taxonomy___children___children___children',
  TaxonomyChildrenInternalContent = 'taxonomy___children___internal___content',
  TaxonomyChildrenInternalContentDigest = 'taxonomy___children___internal___contentDigest',
  TaxonomyChildrenInternalDescription = 'taxonomy___children___internal___description',
  TaxonomyChildrenInternalFieldOwners = 'taxonomy___children___internal___fieldOwners',
  TaxonomyChildrenInternalIgnoreType = 'taxonomy___children___internal___ignoreType',
  TaxonomyChildrenInternalMediaType = 'taxonomy___children___internal___mediaType',
  TaxonomyChildrenInternalOwner = 'taxonomy___children___internal___owner',
  TaxonomyChildrenInternalType = 'taxonomy___children___internal___type',
  TaxonomyInternalContent = 'taxonomy___internal___content',
  TaxonomyInternalContentDigest = 'taxonomy___internal___contentDigest',
  TaxonomyInternalDescription = 'taxonomy___internal___description',
  TaxonomyInternalFieldOwners = 'taxonomy___internal___fieldOwners',
  TaxonomyInternalIgnoreType = 'taxonomy___internal___ignoreType',
  TaxonomyInternalMediaType = 'taxonomy___internal___mediaType',
  TaxonomyInternalOwner = 'taxonomy___internal___owner',
  TaxonomyInternalType = 'taxonomy___internal___type',
  TaxonomyWordpressId = 'taxonomy___wordpress_id',
  TaxonomyName = 'taxonomy___name',
  TaxonomySlug = 'taxonomy___slug',
  TaxonomyDescription = 'taxonomy___description',
  TaxonomyTypes = 'taxonomy___types',
  TaxonomyHierarchical = 'taxonomy___hierarchical',
  TaxonomyRestBase = 'taxonomy___rest_base',
  TaxonomyLinksCollection = 'taxonomy____links___collection',
  TaxonomyLinksCollectionHref = 'taxonomy____links___collection___href',
  TaxonomyLinksWpItems = 'taxonomy____links___wp_items',
  TaxonomyLinksWpItemsHref = 'taxonomy____links___wp_items___href',
  TaxonomyLinksCuries = 'taxonomy____links___curies',
  TaxonomyLinksCuriesName = 'taxonomy____links___curies___name',
  TaxonomyLinksCuriesHref = 'taxonomy____links___curies___href',
  TaxonomyLinksCuriesTemplated = 'taxonomy____links___curies___templated',
  Path = 'path'
}

export type Wordpress__CategoryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  count?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  wordpress_parent?: Maybe<IntQueryOperatorInput>;
  _links?: Maybe<Wordpress__Category_LinksFilterInput>;
  taxonomy?: Maybe<Wordpress__Wp_TaxonomiesFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__CategoryFilterListInput = {
  elemMatch?: Maybe<Wordpress__CategoryFilterInput>;
};

export type Wordpress__CategoryGroupConnection = {
  __typename?: 'wordpress__CATEGORYGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__CategoryEdge>;
  nodes: Array<Wordpress__Category>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__CategorySortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__CategoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__Page = Node & {
  __typename?: 'wordpress__PAGE';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Date']>;
  guid?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['Date']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  wordpress_parent?: Maybe<Scalars['Int']>;
  menu_order?: Maybe<Scalars['Int']>;
  comment_status?: Maybe<Scalars['String']>;
  ping_status?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  _links?: Maybe<Wordpress__Page_Links>;
  author?: Maybe<Wordpress__Wp_Users>;
  path?: Maybe<Scalars['String']>;
};


export type Wordpress__PageDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type Wordpress__PageModifiedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Wordpress__Page_Links = {
  __typename?: 'wordpress__PAGE_links';
  self?: Maybe<Array<Maybe<Wordpress__Page_LinksSelf>>>;
  collection?: Maybe<Array<Maybe<Wordpress__Page_LinksCollection>>>;
  about?: Maybe<Array<Maybe<Wordpress__Page_LinksAbout>>>;
  author?: Maybe<Array<Maybe<Wordpress__Page_LinksAuthor>>>;
  replies?: Maybe<Array<Maybe<Wordpress__Page_LinksReplies>>>;
  version_history?: Maybe<Array<Maybe<Wordpress__Page_LinksVersion_History>>>;
  predecessor_version?: Maybe<Array<Maybe<Wordpress__Page_LinksPredecessor_Version>>>;
  wp_attachment?: Maybe<Array<Maybe<Wordpress__Page_LinksWp_Attachment>>>;
  curies?: Maybe<Array<Maybe<Wordpress__Page_LinksCuries>>>;
};

export type Wordpress__Page_LinksAbout = {
  __typename?: 'wordpress__PAGE_linksAbout';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Page_LinksAboutFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Page_LinksAboutFilterListInput = {
  elemMatch?: Maybe<Wordpress__Page_LinksAboutFilterInput>;
};

export type Wordpress__Page_LinksAuthor = {
  __typename?: 'wordpress__PAGE_linksAuthor';
  embeddable?: Maybe<Scalars['Boolean']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Page_LinksAuthorFilterInput = {
  embeddable?: Maybe<BooleanQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Page_LinksAuthorFilterListInput = {
  elemMatch?: Maybe<Wordpress__Page_LinksAuthorFilterInput>;
};

export type Wordpress__Page_LinksCollection = {
  __typename?: 'wordpress__PAGE_linksCollection';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Page_LinksCollectionFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Page_LinksCollectionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Page_LinksCollectionFilterInput>;
};

export type Wordpress__Page_LinksCuries = {
  __typename?: 'wordpress__PAGE_linksCuries';
  name?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  templated?: Maybe<Scalars['Boolean']>;
};

export type Wordpress__Page_LinksCuriesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  templated?: Maybe<BooleanQueryOperatorInput>;
};

export type Wordpress__Page_LinksCuriesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Page_LinksCuriesFilterInput>;
};

export type Wordpress__Page_LinksFilterInput = {
  self?: Maybe<Wordpress__Page_LinksSelfFilterListInput>;
  collection?: Maybe<Wordpress__Page_LinksCollectionFilterListInput>;
  about?: Maybe<Wordpress__Page_LinksAboutFilterListInput>;
  author?: Maybe<Wordpress__Page_LinksAuthorFilterListInput>;
  replies?: Maybe<Wordpress__Page_LinksRepliesFilterListInput>;
  version_history?: Maybe<Wordpress__Page_LinksVersion_HistoryFilterListInput>;
  predecessor_version?: Maybe<Wordpress__Page_LinksPredecessor_VersionFilterListInput>;
  wp_attachment?: Maybe<Wordpress__Page_LinksWp_AttachmentFilterListInput>;
  curies?: Maybe<Wordpress__Page_LinksCuriesFilterListInput>;
};

export type Wordpress__Page_LinksPredecessor_Version = {
  __typename?: 'wordpress__PAGE_linksPredecessor_version';
  wordpress_id?: Maybe<Scalars['Int']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Page_LinksPredecessor_VersionFilterInput = {
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Page_LinksPredecessor_VersionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Page_LinksPredecessor_VersionFilterInput>;
};

export type Wordpress__Page_LinksReplies = {
  __typename?: 'wordpress__PAGE_linksReplies';
  embeddable?: Maybe<Scalars['Boolean']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Page_LinksRepliesFilterInput = {
  embeddable?: Maybe<BooleanQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Page_LinksRepliesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Page_LinksRepliesFilterInput>;
};

export type Wordpress__Page_LinksSelf = {
  __typename?: 'wordpress__PAGE_linksSelf';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Page_LinksSelfFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Page_LinksSelfFilterListInput = {
  elemMatch?: Maybe<Wordpress__Page_LinksSelfFilterInput>;
};

export type Wordpress__Page_LinksVersion_History = {
  __typename?: 'wordpress__PAGE_linksVersion_history';
  count?: Maybe<Scalars['Int']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Page_LinksVersion_HistoryFilterInput = {
  count?: Maybe<IntQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Page_LinksVersion_HistoryFilterListInput = {
  elemMatch?: Maybe<Wordpress__Page_LinksVersion_HistoryFilterInput>;
};

export type Wordpress__Page_LinksWp_Attachment = {
  __typename?: 'wordpress__PAGE_linksWp_attachment';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Page_LinksWp_AttachmentFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Page_LinksWp_AttachmentFilterListInput = {
  elemMatch?: Maybe<Wordpress__Page_LinksWp_AttachmentFilterInput>;
};

export type Wordpress__PageConnection = {
  __typename?: 'wordpress__PAGEConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__PageEdge>;
  nodes: Array<Wordpress__Page>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__PageGroupConnection>;
};


export type Wordpress__PageConnectionDistinctArgs = {
  field: Wordpress__PageFieldsEnum;
};


export type Wordpress__PageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__PageFieldsEnum;
};

export type Wordpress__PageEdge = {
  __typename?: 'wordpress__PAGEEdge';
  next?: Maybe<Wordpress__Page>;
  node: Wordpress__Page;
  previous?: Maybe<Wordpress__Page>;
};

export enum Wordpress__PageFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  WordpressId = 'wordpress_id',
  Date = 'date',
  Guid = 'guid',
  Modified = 'modified',
  Slug = 'slug',
  Status = 'status',
  Type = 'type',
  Link = 'link',
  Title = 'title',
  Content = 'content',
  Excerpt = 'excerpt',
  WordpressParent = 'wordpress_parent',
  MenuOrder = 'menu_order',
  CommentStatus = 'comment_status',
  PingStatus = 'ping_status',
  Template = 'template',
  LinksSelf = '_links___self',
  LinksSelfHref = '_links___self___href',
  LinksCollection = '_links___collection',
  LinksCollectionHref = '_links___collection___href',
  LinksAbout = '_links___about',
  LinksAboutHref = '_links___about___href',
  LinksAuthor = '_links___author',
  LinksAuthorEmbeddable = '_links___author___embeddable',
  LinksAuthorHref = '_links___author___href',
  LinksReplies = '_links___replies',
  LinksRepliesEmbeddable = '_links___replies___embeddable',
  LinksRepliesHref = '_links___replies___href',
  LinksVersionHistory = '_links___version_history',
  LinksVersionHistoryCount = '_links___version_history___count',
  LinksVersionHistoryHref = '_links___version_history___href',
  LinksPredecessorVersion = '_links___predecessor_version',
  LinksPredecessorVersionWordpressId = '_links___predecessor_version___wordpress_id',
  LinksPredecessorVersionHref = '_links___predecessor_version___href',
  LinksWpAttachment = '_links___wp_attachment',
  LinksWpAttachmentHref = '_links___wp_attachment___href',
  LinksCuries = '_links___curies',
  LinksCuriesName = '_links___curies___name',
  LinksCuriesHref = '_links___curies___href',
  LinksCuriesTemplated = '_links___curies___templated',
  AuthorId = 'author___id',
  AuthorParentId = 'author___parent___id',
  AuthorParentParentId = 'author___parent___parent___id',
  AuthorParentParentChildren = 'author___parent___parent___children',
  AuthorParentChildren = 'author___parent___children',
  AuthorParentChildrenId = 'author___parent___children___id',
  AuthorParentChildrenChildren = 'author___parent___children___children',
  AuthorParentInternalContent = 'author___parent___internal___content',
  AuthorParentInternalContentDigest = 'author___parent___internal___contentDigest',
  AuthorParentInternalDescription = 'author___parent___internal___description',
  AuthorParentInternalFieldOwners = 'author___parent___internal___fieldOwners',
  AuthorParentInternalIgnoreType = 'author___parent___internal___ignoreType',
  AuthorParentInternalMediaType = 'author___parent___internal___mediaType',
  AuthorParentInternalOwner = 'author___parent___internal___owner',
  AuthorParentInternalType = 'author___parent___internal___type',
  AuthorChildren = 'author___children',
  AuthorChildrenId = 'author___children___id',
  AuthorChildrenParentId = 'author___children___parent___id',
  AuthorChildrenParentChildren = 'author___children___parent___children',
  AuthorChildrenChildren = 'author___children___children',
  AuthorChildrenChildrenId = 'author___children___children___id',
  AuthorChildrenChildrenChildren = 'author___children___children___children',
  AuthorChildrenInternalContent = 'author___children___internal___content',
  AuthorChildrenInternalContentDigest = 'author___children___internal___contentDigest',
  AuthorChildrenInternalDescription = 'author___children___internal___description',
  AuthorChildrenInternalFieldOwners = 'author___children___internal___fieldOwners',
  AuthorChildrenInternalIgnoreType = 'author___children___internal___ignoreType',
  AuthorChildrenInternalMediaType = 'author___children___internal___mediaType',
  AuthorChildrenInternalOwner = 'author___children___internal___owner',
  AuthorChildrenInternalType = 'author___children___internal___type',
  AuthorInternalContent = 'author___internal___content',
  AuthorInternalContentDigest = 'author___internal___contentDigest',
  AuthorInternalDescription = 'author___internal___description',
  AuthorInternalFieldOwners = 'author___internal___fieldOwners',
  AuthorInternalIgnoreType = 'author___internal___ignoreType',
  AuthorInternalMediaType = 'author___internal___mediaType',
  AuthorInternalOwner = 'author___internal___owner',
  AuthorInternalType = 'author___internal___type',
  AuthorWordpressId = 'author___wordpress_id',
  AuthorName = 'author___name',
  AuthorUrl = 'author___url',
  AuthorDescription = 'author___description',
  AuthorLink = 'author___link',
  AuthorSlug = 'author___slug',
  AuthorAvatarUrlsWordpress_24 = 'author___avatar_urls___wordpress_24',
  AuthorAvatarUrlsWordpress_48 = 'author___avatar_urls___wordpress_48',
  AuthorAvatarUrlsWordpress_96 = 'author___avatar_urls___wordpress_96',
  AuthorLinksSelf = 'author____links___self',
  AuthorLinksSelfHref = 'author____links___self___href',
  AuthorLinksCollection = 'author____links___collection',
  AuthorLinksCollectionHref = 'author____links___collection___href',
  AuthorAuthoredWordpressPage = 'author___authored_wordpress__PAGE',
  AuthorAuthoredWordpressPageId = 'author___authored_wordpress__PAGE___id',
  AuthorAuthoredWordpressPageParentId = 'author___authored_wordpress__PAGE___parent___id',
  AuthorAuthoredWordpressPageParentChildren = 'author___authored_wordpress__PAGE___parent___children',
  AuthorAuthoredWordpressPageChildren = 'author___authored_wordpress__PAGE___children',
  AuthorAuthoredWordpressPageChildrenId = 'author___authored_wordpress__PAGE___children___id',
  AuthorAuthoredWordpressPageChildrenChildren = 'author___authored_wordpress__PAGE___children___children',
  AuthorAuthoredWordpressPageInternalContent = 'author___authored_wordpress__PAGE___internal___content',
  AuthorAuthoredWordpressPageInternalContentDigest = 'author___authored_wordpress__PAGE___internal___contentDigest',
  AuthorAuthoredWordpressPageInternalDescription = 'author___authored_wordpress__PAGE___internal___description',
  AuthorAuthoredWordpressPageInternalFieldOwners = 'author___authored_wordpress__PAGE___internal___fieldOwners',
  AuthorAuthoredWordpressPageInternalIgnoreType = 'author___authored_wordpress__PAGE___internal___ignoreType',
  AuthorAuthoredWordpressPageInternalMediaType = 'author___authored_wordpress__PAGE___internal___mediaType',
  AuthorAuthoredWordpressPageInternalOwner = 'author___authored_wordpress__PAGE___internal___owner',
  AuthorAuthoredWordpressPageInternalType = 'author___authored_wordpress__PAGE___internal___type',
  AuthorAuthoredWordpressPageWordpressId = 'author___authored_wordpress__PAGE___wordpress_id',
  AuthorAuthoredWordpressPageDate = 'author___authored_wordpress__PAGE___date',
  AuthorAuthoredWordpressPageGuid = 'author___authored_wordpress__PAGE___guid',
  AuthorAuthoredWordpressPageModified = 'author___authored_wordpress__PAGE___modified',
  AuthorAuthoredWordpressPageSlug = 'author___authored_wordpress__PAGE___slug',
  AuthorAuthoredWordpressPageStatus = 'author___authored_wordpress__PAGE___status',
  AuthorAuthoredWordpressPageType = 'author___authored_wordpress__PAGE___type',
  AuthorAuthoredWordpressPageLink = 'author___authored_wordpress__PAGE___link',
  AuthorAuthoredWordpressPageTitle = 'author___authored_wordpress__PAGE___title',
  AuthorAuthoredWordpressPageContent = 'author___authored_wordpress__PAGE___content',
  AuthorAuthoredWordpressPageExcerpt = 'author___authored_wordpress__PAGE___excerpt',
  AuthorAuthoredWordpressPageWordpressParent = 'author___authored_wordpress__PAGE___wordpress_parent',
  AuthorAuthoredWordpressPageMenuOrder = 'author___authored_wordpress__PAGE___menu_order',
  AuthorAuthoredWordpressPageCommentStatus = 'author___authored_wordpress__PAGE___comment_status',
  AuthorAuthoredWordpressPagePingStatus = 'author___authored_wordpress__PAGE___ping_status',
  AuthorAuthoredWordpressPageTemplate = 'author___authored_wordpress__PAGE___template',
  AuthorAuthoredWordpressPageLinksSelf = 'author___authored_wordpress__PAGE____links___self',
  AuthorAuthoredWordpressPageLinksCollection = 'author___authored_wordpress__PAGE____links___collection',
  AuthorAuthoredWordpressPageLinksAbout = 'author___authored_wordpress__PAGE____links___about',
  AuthorAuthoredWordpressPageLinksAuthor = 'author___authored_wordpress__PAGE____links___author',
  AuthorAuthoredWordpressPageLinksReplies = 'author___authored_wordpress__PAGE____links___replies',
  AuthorAuthoredWordpressPageLinksVersionHistory = 'author___authored_wordpress__PAGE____links___version_history',
  AuthorAuthoredWordpressPageLinksPredecessorVersion = 'author___authored_wordpress__PAGE____links___predecessor_version',
  AuthorAuthoredWordpressPageLinksWpAttachment = 'author___authored_wordpress__PAGE____links___wp_attachment',
  AuthorAuthoredWordpressPageLinksCuries = 'author___authored_wordpress__PAGE____links___curies',
  AuthorAuthoredWordpressPageAuthorId = 'author___authored_wordpress__PAGE___author___id',
  AuthorAuthoredWordpressPageAuthorChildren = 'author___authored_wordpress__PAGE___author___children',
  AuthorAuthoredWordpressPageAuthorWordpressId = 'author___authored_wordpress__PAGE___author___wordpress_id',
  AuthorAuthoredWordpressPageAuthorName = 'author___authored_wordpress__PAGE___author___name',
  AuthorAuthoredWordpressPageAuthorUrl = 'author___authored_wordpress__PAGE___author___url',
  AuthorAuthoredWordpressPageAuthorDescription = 'author___authored_wordpress__PAGE___author___description',
  AuthorAuthoredWordpressPageAuthorLink = 'author___authored_wordpress__PAGE___author___link',
  AuthorAuthoredWordpressPageAuthorSlug = 'author___authored_wordpress__PAGE___author___slug',
  AuthorAuthoredWordpressPageAuthorAuthoredWordpressPage = 'author___authored_wordpress__PAGE___author___authored_wordpress__PAGE',
  AuthorAuthoredWordpressPageAuthorAuthoredWordpressWpMedia = 'author___authored_wordpress__PAGE___author___authored_wordpress__wp_media',
  AuthorAuthoredWordpressPageAuthorPath = 'author___authored_wordpress__PAGE___author___path',
  AuthorAuthoredWordpressPageAuthorAuthoredWordpressPost = 'author___authored_wordpress__PAGE___author___authored_wordpress__POST',
  AuthorAuthoredWordpressPagePath = 'author___authored_wordpress__PAGE___path',
  AuthorAuthoredWordpressWpMedia = 'author___authored_wordpress__wp_media',
  AuthorAuthoredWordpressWpMediaId = 'author___authored_wordpress__wp_media___id',
  AuthorAuthoredWordpressWpMediaParentId = 'author___authored_wordpress__wp_media___parent___id',
  AuthorAuthoredWordpressWpMediaParentChildren = 'author___authored_wordpress__wp_media___parent___children',
  AuthorAuthoredWordpressWpMediaChildren = 'author___authored_wordpress__wp_media___children',
  AuthorAuthoredWordpressWpMediaChildrenId = 'author___authored_wordpress__wp_media___children___id',
  AuthorAuthoredWordpressWpMediaChildrenChildren = 'author___authored_wordpress__wp_media___children___children',
  AuthorAuthoredWordpressWpMediaInternalContent = 'author___authored_wordpress__wp_media___internal___content',
  AuthorAuthoredWordpressWpMediaInternalContentDigest = 'author___authored_wordpress__wp_media___internal___contentDigest',
  AuthorAuthoredWordpressWpMediaInternalDescription = 'author___authored_wordpress__wp_media___internal___description',
  AuthorAuthoredWordpressWpMediaInternalFieldOwners = 'author___authored_wordpress__wp_media___internal___fieldOwners',
  AuthorAuthoredWordpressWpMediaInternalIgnoreType = 'author___authored_wordpress__wp_media___internal___ignoreType',
  AuthorAuthoredWordpressWpMediaInternalMediaType = 'author___authored_wordpress__wp_media___internal___mediaType',
  AuthorAuthoredWordpressWpMediaInternalOwner = 'author___authored_wordpress__wp_media___internal___owner',
  AuthorAuthoredWordpressWpMediaInternalType = 'author___authored_wordpress__wp_media___internal___type',
  AuthorAuthoredWordpressWpMediaWordpressId = 'author___authored_wordpress__wp_media___wordpress_id',
  AuthorAuthoredWordpressWpMediaDate = 'author___authored_wordpress__wp_media___date',
  AuthorAuthoredWordpressWpMediaModified = 'author___authored_wordpress__wp_media___modified',
  AuthorAuthoredWordpressWpMediaSlug = 'author___authored_wordpress__wp_media___slug',
  AuthorAuthoredWordpressWpMediaStatus = 'author___authored_wordpress__wp_media___status',
  AuthorAuthoredWordpressWpMediaType = 'author___authored_wordpress__wp_media___type',
  AuthorAuthoredWordpressWpMediaLink = 'author___authored_wordpress__wp_media___link',
  AuthorAuthoredWordpressWpMediaTitle = 'author___authored_wordpress__wp_media___title',
  AuthorAuthoredWordpressWpMediaCommentStatus = 'author___authored_wordpress__wp_media___comment_status',
  AuthorAuthoredWordpressWpMediaPingStatus = 'author___authored_wordpress__wp_media___ping_status',
  AuthorAuthoredWordpressWpMediaTemplate = 'author___authored_wordpress__wp_media___template',
  AuthorAuthoredWordpressWpMediaDescription = 'author___authored_wordpress__wp_media___description',
  AuthorAuthoredWordpressWpMediaCaption = 'author___authored_wordpress__wp_media___caption',
  AuthorAuthoredWordpressWpMediaAltText = 'author___authored_wordpress__wp_media___alt_text',
  AuthorAuthoredWordpressWpMediaMediaType = 'author___authored_wordpress__wp_media___media_type',
  AuthorAuthoredWordpressWpMediaMimeType = 'author___authored_wordpress__wp_media___mime_type',
  AuthorAuthoredWordpressWpMediaMediaDetailsWidth = 'author___authored_wordpress__wp_media___media_details___width',
  AuthorAuthoredWordpressWpMediaMediaDetailsHeight = 'author___authored_wordpress__wp_media___media_details___height',
  AuthorAuthoredWordpressWpMediaMediaDetailsFile = 'author___authored_wordpress__wp_media___media_details___file',
  AuthorAuthoredWordpressWpMediaMediaDetailsOriginalImage = 'author___authored_wordpress__wp_media___media_details___original_image',
  AuthorAuthoredWordpressWpMediaSourceUrl = 'author___authored_wordpress__wp_media___source_url',
  AuthorAuthoredWordpressWpMediaLinksSelf = 'author___authored_wordpress__wp_media____links___self',
  AuthorAuthoredWordpressWpMediaLinksCollection = 'author___authored_wordpress__wp_media____links___collection',
  AuthorAuthoredWordpressWpMediaLinksAbout = 'author___authored_wordpress__wp_media____links___about',
  AuthorAuthoredWordpressWpMediaLinksAuthor = 'author___authored_wordpress__wp_media____links___author',
  AuthorAuthoredWordpressWpMediaLinksReplies = 'author___authored_wordpress__wp_media____links___replies',
  AuthorAuthoredWordpressWpMediaAuthorId = 'author___authored_wordpress__wp_media___author___id',
  AuthorAuthoredWordpressWpMediaAuthorChildren = 'author___authored_wordpress__wp_media___author___children',
  AuthorAuthoredWordpressWpMediaAuthorWordpressId = 'author___authored_wordpress__wp_media___author___wordpress_id',
  AuthorAuthoredWordpressWpMediaAuthorName = 'author___authored_wordpress__wp_media___author___name',
  AuthorAuthoredWordpressWpMediaAuthorUrl = 'author___authored_wordpress__wp_media___author___url',
  AuthorAuthoredWordpressWpMediaAuthorDescription = 'author___authored_wordpress__wp_media___author___description',
  AuthorAuthoredWordpressWpMediaAuthorLink = 'author___authored_wordpress__wp_media___author___link',
  AuthorAuthoredWordpressWpMediaAuthorSlug = 'author___authored_wordpress__wp_media___author___slug',
  AuthorAuthoredWordpressWpMediaAuthorAuthoredWordpressPage = 'author___authored_wordpress__wp_media___author___authored_wordpress__PAGE',
  AuthorAuthoredWordpressWpMediaAuthorAuthoredWordpressWpMedia = 'author___authored_wordpress__wp_media___author___authored_wordpress__wp_media',
  AuthorAuthoredWordpressWpMediaAuthorPath = 'author___authored_wordpress__wp_media___author___path',
  AuthorAuthoredWordpressWpMediaAuthorAuthoredWordpressPost = 'author___authored_wordpress__wp_media___author___authored_wordpress__POST',
  AuthorAuthoredWordpressWpMediaGuidId = 'author___authored_wordpress__wp_media___guid___id',
  AuthorAuthoredWordpressWpMediaGuidChildren = 'author___authored_wordpress__wp_media___guid___children',
  AuthorAuthoredWordpressWpMediaGuidWordpressId = 'author___authored_wordpress__wp_media___guid___wordpress_id',
  AuthorAuthoredWordpressWpMediaGuidDate = 'author___authored_wordpress__wp_media___guid___date',
  AuthorAuthoredWordpressWpMediaGuidModified = 'author___authored_wordpress__wp_media___guid___modified',
  AuthorAuthoredWordpressWpMediaGuidSlug = 'author___authored_wordpress__wp_media___guid___slug',
  AuthorAuthoredWordpressWpMediaGuidStatus = 'author___authored_wordpress__wp_media___guid___status',
  AuthorAuthoredWordpressWpMediaGuidType = 'author___authored_wordpress__wp_media___guid___type',
  AuthorAuthoredWordpressWpMediaGuidLink = 'author___authored_wordpress__wp_media___guid___link',
  AuthorAuthoredWordpressWpMediaGuidTitle = 'author___authored_wordpress__wp_media___guid___title',
  AuthorAuthoredWordpressWpMediaGuidCommentStatus = 'author___authored_wordpress__wp_media___guid___comment_status',
  AuthorAuthoredWordpressWpMediaGuidPingStatus = 'author___authored_wordpress__wp_media___guid___ping_status',
  AuthorAuthoredWordpressWpMediaGuidTemplate = 'author___authored_wordpress__wp_media___guid___template',
  AuthorAuthoredWordpressWpMediaGuidDescription = 'author___authored_wordpress__wp_media___guid___description',
  AuthorAuthoredWordpressWpMediaGuidCaption = 'author___authored_wordpress__wp_media___guid___caption',
  AuthorAuthoredWordpressWpMediaGuidAltText = 'author___authored_wordpress__wp_media___guid___alt_text',
  AuthorAuthoredWordpressWpMediaGuidMediaType = 'author___authored_wordpress__wp_media___guid___media_type',
  AuthorAuthoredWordpressWpMediaGuidMimeType = 'author___authored_wordpress__wp_media___guid___mime_type',
  AuthorAuthoredWordpressWpMediaGuidSourceUrl = 'author___authored_wordpress__wp_media___guid___source_url',
  AuthorAuthoredWordpressWpMediaGuidPath = 'author___authored_wordpress__wp_media___guid___path',
  AuthorAuthoredWordpressWpMediaLocalFileSourceInstanceName = 'author___authored_wordpress__wp_media___localFile___sourceInstanceName',
  AuthorAuthoredWordpressWpMediaLocalFileAbsolutePath = 'author___authored_wordpress__wp_media___localFile___absolutePath',
  AuthorAuthoredWordpressWpMediaLocalFileRelativePath = 'author___authored_wordpress__wp_media___localFile___relativePath',
  AuthorAuthoredWordpressWpMediaLocalFileExtension = 'author___authored_wordpress__wp_media___localFile___extension',
  AuthorAuthoredWordpressWpMediaLocalFileSize = 'author___authored_wordpress__wp_media___localFile___size',
  AuthorAuthoredWordpressWpMediaLocalFilePrettySize = 'author___authored_wordpress__wp_media___localFile___prettySize',
  AuthorAuthoredWordpressWpMediaLocalFileModifiedTime = 'author___authored_wordpress__wp_media___localFile___modifiedTime',
  AuthorAuthoredWordpressWpMediaLocalFileAccessTime = 'author___authored_wordpress__wp_media___localFile___accessTime',
  AuthorAuthoredWordpressWpMediaLocalFileChangeTime = 'author___authored_wordpress__wp_media___localFile___changeTime',
  AuthorAuthoredWordpressWpMediaLocalFileBirthTime = 'author___authored_wordpress__wp_media___localFile___birthTime',
  AuthorAuthoredWordpressWpMediaLocalFileRoot = 'author___authored_wordpress__wp_media___localFile___root',
  AuthorAuthoredWordpressWpMediaLocalFileDir = 'author___authored_wordpress__wp_media___localFile___dir',
  AuthorAuthoredWordpressWpMediaLocalFileBase = 'author___authored_wordpress__wp_media___localFile___base',
  AuthorAuthoredWordpressWpMediaLocalFileExt = 'author___authored_wordpress__wp_media___localFile___ext',
  AuthorAuthoredWordpressWpMediaLocalFileName = 'author___authored_wordpress__wp_media___localFile___name',
  AuthorAuthoredWordpressWpMediaLocalFileRelativeDirectory = 'author___authored_wordpress__wp_media___localFile___relativeDirectory',
  AuthorAuthoredWordpressWpMediaLocalFileDev = 'author___authored_wordpress__wp_media___localFile___dev',
  AuthorAuthoredWordpressWpMediaLocalFileMode = 'author___authored_wordpress__wp_media___localFile___mode',
  AuthorAuthoredWordpressWpMediaLocalFileNlink = 'author___authored_wordpress__wp_media___localFile___nlink',
  AuthorAuthoredWordpressWpMediaLocalFileUid = 'author___authored_wordpress__wp_media___localFile___uid',
  AuthorAuthoredWordpressWpMediaLocalFileGid = 'author___authored_wordpress__wp_media___localFile___gid',
  AuthorAuthoredWordpressWpMediaLocalFileRdev = 'author___authored_wordpress__wp_media___localFile___rdev',
  AuthorAuthoredWordpressWpMediaLocalFileIno = 'author___authored_wordpress__wp_media___localFile___ino',
  AuthorAuthoredWordpressWpMediaLocalFileAtimeMs = 'author___authored_wordpress__wp_media___localFile___atimeMs',
  AuthorAuthoredWordpressWpMediaLocalFileMtimeMs = 'author___authored_wordpress__wp_media___localFile___mtimeMs',
  AuthorAuthoredWordpressWpMediaLocalFileCtimeMs = 'author___authored_wordpress__wp_media___localFile___ctimeMs',
  AuthorAuthoredWordpressWpMediaLocalFileAtime = 'author___authored_wordpress__wp_media___localFile___atime',
  AuthorAuthoredWordpressWpMediaLocalFileMtime = 'author___authored_wordpress__wp_media___localFile___mtime',
  AuthorAuthoredWordpressWpMediaLocalFileCtime = 'author___authored_wordpress__wp_media___localFile___ctime',
  AuthorAuthoredWordpressWpMediaLocalFileBirthtime = 'author___authored_wordpress__wp_media___localFile___birthtime',
  AuthorAuthoredWordpressWpMediaLocalFileBirthtimeMs = 'author___authored_wordpress__wp_media___localFile___birthtimeMs',
  AuthorAuthoredWordpressWpMediaLocalFileBlksize = 'author___authored_wordpress__wp_media___localFile___blksize',
  AuthorAuthoredWordpressWpMediaLocalFileBlocks = 'author___authored_wordpress__wp_media___localFile___blocks',
  AuthorAuthoredWordpressWpMediaLocalFileUrl = 'author___authored_wordpress__wp_media___localFile___url',
  AuthorAuthoredWordpressWpMediaLocalFileId = 'author___authored_wordpress__wp_media___localFile___id',
  AuthorAuthoredWordpressWpMediaLocalFileChildren = 'author___authored_wordpress__wp_media___localFile___children',
  AuthorAuthoredWordpressWpMediaPath = 'author___authored_wordpress__wp_media___path',
  AuthorPath = 'author___path',
  AuthorAuthoredWordpressPost = 'author___authored_wordpress__POST',
  AuthorAuthoredWordpressPostId = 'author___authored_wordpress__POST___id',
  AuthorAuthoredWordpressPostParentId = 'author___authored_wordpress__POST___parent___id',
  AuthorAuthoredWordpressPostParentChildren = 'author___authored_wordpress__POST___parent___children',
  AuthorAuthoredWordpressPostChildren = 'author___authored_wordpress__POST___children',
  AuthorAuthoredWordpressPostChildrenId = 'author___authored_wordpress__POST___children___id',
  AuthorAuthoredWordpressPostChildrenChildren = 'author___authored_wordpress__POST___children___children',
  AuthorAuthoredWordpressPostInternalContent = 'author___authored_wordpress__POST___internal___content',
  AuthorAuthoredWordpressPostInternalContentDigest = 'author___authored_wordpress__POST___internal___contentDigest',
  AuthorAuthoredWordpressPostInternalDescription = 'author___authored_wordpress__POST___internal___description',
  AuthorAuthoredWordpressPostInternalFieldOwners = 'author___authored_wordpress__POST___internal___fieldOwners',
  AuthorAuthoredWordpressPostInternalIgnoreType = 'author___authored_wordpress__POST___internal___ignoreType',
  AuthorAuthoredWordpressPostInternalMediaType = 'author___authored_wordpress__POST___internal___mediaType',
  AuthorAuthoredWordpressPostInternalOwner = 'author___authored_wordpress__POST___internal___owner',
  AuthorAuthoredWordpressPostInternalType = 'author___authored_wordpress__POST___internal___type',
  AuthorAuthoredWordpressPostWordpressId = 'author___authored_wordpress__POST___wordpress_id',
  AuthorAuthoredWordpressPostDate = 'author___authored_wordpress__POST___date',
  AuthorAuthoredWordpressPostGuid = 'author___authored_wordpress__POST___guid',
  AuthorAuthoredWordpressPostModified = 'author___authored_wordpress__POST___modified',
  AuthorAuthoredWordpressPostSlug = 'author___authored_wordpress__POST___slug',
  AuthorAuthoredWordpressPostStatus = 'author___authored_wordpress__POST___status',
  AuthorAuthoredWordpressPostType = 'author___authored_wordpress__POST___type',
  AuthorAuthoredWordpressPostLink = 'author___authored_wordpress__POST___link',
  AuthorAuthoredWordpressPostTitle = 'author___authored_wordpress__POST___title',
  AuthorAuthoredWordpressPostContent = 'author___authored_wordpress__POST___content',
  AuthorAuthoredWordpressPostExcerpt = 'author___authored_wordpress__POST___excerpt',
  AuthorAuthoredWordpressPostCommentStatus = 'author___authored_wordpress__POST___comment_status',
  AuthorAuthoredWordpressPostPingStatus = 'author___authored_wordpress__POST___ping_status',
  AuthorAuthoredWordpressPostSticky = 'author___authored_wordpress__POST___sticky',
  AuthorAuthoredWordpressPostTemplate = 'author___authored_wordpress__POST___template',
  AuthorAuthoredWordpressPostFormat = 'author___authored_wordpress__POST___format',
  AuthorAuthoredWordpressPostLinksSelf = 'author___authored_wordpress__POST____links___self',
  AuthorAuthoredWordpressPostLinksCollection = 'author___authored_wordpress__POST____links___collection',
  AuthorAuthoredWordpressPostLinksAbout = 'author___authored_wordpress__POST____links___about',
  AuthorAuthoredWordpressPostLinksAuthor = 'author___authored_wordpress__POST____links___author',
  AuthorAuthoredWordpressPostLinksReplies = 'author___authored_wordpress__POST____links___replies',
  AuthorAuthoredWordpressPostLinksVersionHistory = 'author___authored_wordpress__POST____links___version_history',
  AuthorAuthoredWordpressPostLinksPredecessorVersion = 'author___authored_wordpress__POST____links___predecessor_version',
  AuthorAuthoredWordpressPostLinksWpFeaturedmedia = 'author___authored_wordpress__POST____links___wp_featuredmedia',
  AuthorAuthoredWordpressPostLinksWpAttachment = 'author___authored_wordpress__POST____links___wp_attachment',
  AuthorAuthoredWordpressPostLinksWpTerm = 'author___authored_wordpress__POST____links___wp_term',
  AuthorAuthoredWordpressPostLinksCuries = 'author___authored_wordpress__POST____links___curies',
  AuthorAuthoredWordpressPostAuthorId = 'author___authored_wordpress__POST___author___id',
  AuthorAuthoredWordpressPostAuthorChildren = 'author___authored_wordpress__POST___author___children',
  AuthorAuthoredWordpressPostAuthorWordpressId = 'author___authored_wordpress__POST___author___wordpress_id',
  AuthorAuthoredWordpressPostAuthorName = 'author___authored_wordpress__POST___author___name',
  AuthorAuthoredWordpressPostAuthorUrl = 'author___authored_wordpress__POST___author___url',
  AuthorAuthoredWordpressPostAuthorDescription = 'author___authored_wordpress__POST___author___description',
  AuthorAuthoredWordpressPostAuthorLink = 'author___authored_wordpress__POST___author___link',
  AuthorAuthoredWordpressPostAuthorSlug = 'author___authored_wordpress__POST___author___slug',
  AuthorAuthoredWordpressPostAuthorAuthoredWordpressPage = 'author___authored_wordpress__POST___author___authored_wordpress__PAGE',
  AuthorAuthoredWordpressPostAuthorAuthoredWordpressWpMedia = 'author___authored_wordpress__POST___author___authored_wordpress__wp_media',
  AuthorAuthoredWordpressPostAuthorPath = 'author___authored_wordpress__POST___author___path',
  AuthorAuthoredWordpressPostAuthorAuthoredWordpressPost = 'author___authored_wordpress__POST___author___authored_wordpress__POST',
  AuthorAuthoredWordpressPostCategories = 'author___authored_wordpress__POST___categories',
  AuthorAuthoredWordpressPostCategoriesId = 'author___authored_wordpress__POST___categories___id',
  AuthorAuthoredWordpressPostCategoriesChildren = 'author___authored_wordpress__POST___categories___children',
  AuthorAuthoredWordpressPostCategoriesWordpressId = 'author___authored_wordpress__POST___categories___wordpress_id',
  AuthorAuthoredWordpressPostCategoriesCount = 'author___authored_wordpress__POST___categories___count',
  AuthorAuthoredWordpressPostCategoriesDescription = 'author___authored_wordpress__POST___categories___description',
  AuthorAuthoredWordpressPostCategoriesLink = 'author___authored_wordpress__POST___categories___link',
  AuthorAuthoredWordpressPostCategoriesName = 'author___authored_wordpress__POST___categories___name',
  AuthorAuthoredWordpressPostCategoriesSlug = 'author___authored_wordpress__POST___categories___slug',
  AuthorAuthoredWordpressPostCategoriesWordpressParent = 'author___authored_wordpress__POST___categories___wordpress_parent',
  AuthorAuthoredWordpressPostCategoriesPath = 'author___authored_wordpress__POST___categories___path',
  AuthorAuthoredWordpressPostFeaturedMediaId = 'author___authored_wordpress__POST___featured_media___id',
  AuthorAuthoredWordpressPostFeaturedMediaChildren = 'author___authored_wordpress__POST___featured_media___children',
  AuthorAuthoredWordpressPostFeaturedMediaWordpressId = 'author___authored_wordpress__POST___featured_media___wordpress_id',
  AuthorAuthoredWordpressPostFeaturedMediaDate = 'author___authored_wordpress__POST___featured_media___date',
  AuthorAuthoredWordpressPostFeaturedMediaModified = 'author___authored_wordpress__POST___featured_media___modified',
  AuthorAuthoredWordpressPostFeaturedMediaSlug = 'author___authored_wordpress__POST___featured_media___slug',
  AuthorAuthoredWordpressPostFeaturedMediaStatus = 'author___authored_wordpress__POST___featured_media___status',
  AuthorAuthoredWordpressPostFeaturedMediaType = 'author___authored_wordpress__POST___featured_media___type',
  AuthorAuthoredWordpressPostFeaturedMediaLink = 'author___authored_wordpress__POST___featured_media___link',
  AuthorAuthoredWordpressPostFeaturedMediaTitle = 'author___authored_wordpress__POST___featured_media___title',
  AuthorAuthoredWordpressPostFeaturedMediaCommentStatus = 'author___authored_wordpress__POST___featured_media___comment_status',
  AuthorAuthoredWordpressPostFeaturedMediaPingStatus = 'author___authored_wordpress__POST___featured_media___ping_status',
  AuthorAuthoredWordpressPostFeaturedMediaTemplate = 'author___authored_wordpress__POST___featured_media___template',
  AuthorAuthoredWordpressPostFeaturedMediaDescription = 'author___authored_wordpress__POST___featured_media___description',
  AuthorAuthoredWordpressPostFeaturedMediaCaption = 'author___authored_wordpress__POST___featured_media___caption',
  AuthorAuthoredWordpressPostFeaturedMediaAltText = 'author___authored_wordpress__POST___featured_media___alt_text',
  AuthorAuthoredWordpressPostFeaturedMediaMediaType = 'author___authored_wordpress__POST___featured_media___media_type',
  AuthorAuthoredWordpressPostFeaturedMediaMimeType = 'author___authored_wordpress__POST___featured_media___mime_type',
  AuthorAuthoredWordpressPostFeaturedMediaSourceUrl = 'author___authored_wordpress__POST___featured_media___source_url',
  AuthorAuthoredWordpressPostFeaturedMediaPath = 'author___authored_wordpress__POST___featured_media___path',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlId = 'author___authored_wordpress__POST___jetpack_featured_media_url___id',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlChildren = 'author___authored_wordpress__POST___jetpack_featured_media_url___children',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlWordpressId = 'author___authored_wordpress__POST___jetpack_featured_media_url___wordpress_id',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlDate = 'author___authored_wordpress__POST___jetpack_featured_media_url___date',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlModified = 'author___authored_wordpress__POST___jetpack_featured_media_url___modified',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlSlug = 'author___authored_wordpress__POST___jetpack_featured_media_url___slug',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlStatus = 'author___authored_wordpress__POST___jetpack_featured_media_url___status',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlType = 'author___authored_wordpress__POST___jetpack_featured_media_url___type',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlLink = 'author___authored_wordpress__POST___jetpack_featured_media_url___link',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlTitle = 'author___authored_wordpress__POST___jetpack_featured_media_url___title',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlCommentStatus = 'author___authored_wordpress__POST___jetpack_featured_media_url___comment_status',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlPingStatus = 'author___authored_wordpress__POST___jetpack_featured_media_url___ping_status',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlTemplate = 'author___authored_wordpress__POST___jetpack_featured_media_url___template',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlDescription = 'author___authored_wordpress__POST___jetpack_featured_media_url___description',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlCaption = 'author___authored_wordpress__POST___jetpack_featured_media_url___caption',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlAltText = 'author___authored_wordpress__POST___jetpack_featured_media_url___alt_text',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlMediaType = 'author___authored_wordpress__POST___jetpack_featured_media_url___media_type',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlMimeType = 'author___authored_wordpress__POST___jetpack_featured_media_url___mime_type',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlSourceUrl = 'author___authored_wordpress__POST___jetpack_featured_media_url___source_url',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlPath = 'author___authored_wordpress__POST___jetpack_featured_media_url___path',
  AuthorAuthoredWordpressPostPath = 'author___authored_wordpress__POST___path',
  AuthorAuthoredWordpressPostTags = 'author___authored_wordpress__POST___tags',
  AuthorAuthoredWordpressPostTagsId = 'author___authored_wordpress__POST___tags___id',
  AuthorAuthoredWordpressPostTagsChildren = 'author___authored_wordpress__POST___tags___children',
  AuthorAuthoredWordpressPostTagsWordpressId = 'author___authored_wordpress__POST___tags___wordpress_id',
  AuthorAuthoredWordpressPostTagsCount = 'author___authored_wordpress__POST___tags___count',
  AuthorAuthoredWordpressPostTagsDescription = 'author___authored_wordpress__POST___tags___description',
  AuthorAuthoredWordpressPostTagsLink = 'author___authored_wordpress__POST___tags___link',
  AuthorAuthoredWordpressPostTagsName = 'author___authored_wordpress__POST___tags___name',
  AuthorAuthoredWordpressPostTagsSlug = 'author___authored_wordpress__POST___tags___slug',
  AuthorAuthoredWordpressPostTagsPath = 'author___authored_wordpress__POST___tags___path',
  Path = 'path'
}

export type Wordpress__PageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  wordpress_parent?: Maybe<IntQueryOperatorInput>;
  menu_order?: Maybe<IntQueryOperatorInput>;
  comment_status?: Maybe<StringQueryOperatorInput>;
  ping_status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<StringQueryOperatorInput>;
  _links?: Maybe<Wordpress__Page_LinksFilterInput>;
  author?: Maybe<Wordpress__Wp_UsersFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__PageFilterListInput = {
  elemMatch?: Maybe<Wordpress__PageFilterInput>;
};

export type Wordpress__PageGroupConnection = {
  __typename?: 'wordpress__PAGEGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__PageEdge>;
  nodes: Array<Wordpress__Page>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__PageSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__PageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__PagEwordpress__PosTwordpress__Wp_MediaUnion = Wordpress__Page | Wordpress__Post | Wordpress__Wp_Media;

export type Wordpress__Post = Node & {
  __typename?: 'wordpress__POST';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Date']>;
  guid?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['Date']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  comment_status?: Maybe<Scalars['String']>;
  ping_status?: Maybe<Scalars['String']>;
  sticky?: Maybe<Scalars['Boolean']>;
  template?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  _links?: Maybe<Wordpress__Post_Links>;
  author?: Maybe<Wordpress__Wp_Users>;
  categories?: Maybe<Array<Maybe<Wordpress__Category>>>;
  featured_media?: Maybe<Wordpress__Wp_Media>;
  jetpack_featured_media_url?: Maybe<Wordpress__Wp_Media>;
  path?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Wordpress__Tag>>>;
};


export type Wordpress__PostDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type Wordpress__PostModifiedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Wordpress__Post_Links = {
  __typename?: 'wordpress__POST_links';
  self?: Maybe<Array<Maybe<Wordpress__Post_LinksSelf>>>;
  collection?: Maybe<Array<Maybe<Wordpress__Post_LinksCollection>>>;
  about?: Maybe<Array<Maybe<Wordpress__Post_LinksAbout>>>;
  author?: Maybe<Array<Maybe<Wordpress__Post_LinksAuthor>>>;
  replies?: Maybe<Array<Maybe<Wordpress__Post_LinksReplies>>>;
  version_history?: Maybe<Array<Maybe<Wordpress__Post_LinksVersion_History>>>;
  predecessor_version?: Maybe<Array<Maybe<Wordpress__Post_LinksPredecessor_Version>>>;
  wp_featuredmedia?: Maybe<Array<Maybe<Wordpress__Post_LinksWp_Featuredmedia>>>;
  wp_attachment?: Maybe<Array<Maybe<Wordpress__Post_LinksWp_Attachment>>>;
  wp_term?: Maybe<Array<Maybe<Wordpress__Post_LinksWp_Term>>>;
  curies?: Maybe<Array<Maybe<Wordpress__Post_LinksCuries>>>;
};

export type Wordpress__Post_LinksAbout = {
  __typename?: 'wordpress__POST_linksAbout';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Post_LinksAboutFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Post_LinksAboutFilterListInput = {
  elemMatch?: Maybe<Wordpress__Post_LinksAboutFilterInput>;
};

export type Wordpress__Post_LinksAuthor = {
  __typename?: 'wordpress__POST_linksAuthor';
  embeddable?: Maybe<Scalars['Boolean']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Post_LinksAuthorFilterInput = {
  embeddable?: Maybe<BooleanQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Post_LinksAuthorFilterListInput = {
  elemMatch?: Maybe<Wordpress__Post_LinksAuthorFilterInput>;
};

export type Wordpress__Post_LinksCollection = {
  __typename?: 'wordpress__POST_linksCollection';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Post_LinksCollectionFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Post_LinksCollectionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Post_LinksCollectionFilterInput>;
};

export type Wordpress__Post_LinksCuries = {
  __typename?: 'wordpress__POST_linksCuries';
  name?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  templated?: Maybe<Scalars['Boolean']>;
};

export type Wordpress__Post_LinksCuriesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  templated?: Maybe<BooleanQueryOperatorInput>;
};

export type Wordpress__Post_LinksCuriesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Post_LinksCuriesFilterInput>;
};

export type Wordpress__Post_LinksFilterInput = {
  self?: Maybe<Wordpress__Post_LinksSelfFilterListInput>;
  collection?: Maybe<Wordpress__Post_LinksCollectionFilterListInput>;
  about?: Maybe<Wordpress__Post_LinksAboutFilterListInput>;
  author?: Maybe<Wordpress__Post_LinksAuthorFilterListInput>;
  replies?: Maybe<Wordpress__Post_LinksRepliesFilterListInput>;
  version_history?: Maybe<Wordpress__Post_LinksVersion_HistoryFilterListInput>;
  predecessor_version?: Maybe<Wordpress__Post_LinksPredecessor_VersionFilterListInput>;
  wp_featuredmedia?: Maybe<Wordpress__Post_LinksWp_FeaturedmediaFilterListInput>;
  wp_attachment?: Maybe<Wordpress__Post_LinksWp_AttachmentFilterListInput>;
  wp_term?: Maybe<Wordpress__Post_LinksWp_TermFilterListInput>;
  curies?: Maybe<Wordpress__Post_LinksCuriesFilterListInput>;
};

export type Wordpress__Post_LinksPredecessor_Version = {
  __typename?: 'wordpress__POST_linksPredecessor_version';
  wordpress_id?: Maybe<Scalars['Int']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Post_LinksPredecessor_VersionFilterInput = {
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Post_LinksPredecessor_VersionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Post_LinksPredecessor_VersionFilterInput>;
};

export type Wordpress__Post_LinksReplies = {
  __typename?: 'wordpress__POST_linksReplies';
  embeddable?: Maybe<Scalars['Boolean']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Post_LinksRepliesFilterInput = {
  embeddable?: Maybe<BooleanQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Post_LinksRepliesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Post_LinksRepliesFilterInput>;
};

export type Wordpress__Post_LinksSelf = {
  __typename?: 'wordpress__POST_linksSelf';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Post_LinksSelfFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Post_LinksSelfFilterListInput = {
  elemMatch?: Maybe<Wordpress__Post_LinksSelfFilterInput>;
};

export type Wordpress__Post_LinksVersion_History = {
  __typename?: 'wordpress__POST_linksVersion_history';
  count?: Maybe<Scalars['Int']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Post_LinksVersion_HistoryFilterInput = {
  count?: Maybe<IntQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Post_LinksVersion_HistoryFilterListInput = {
  elemMatch?: Maybe<Wordpress__Post_LinksVersion_HistoryFilterInput>;
};

export type Wordpress__Post_LinksWp_Attachment = {
  __typename?: 'wordpress__POST_linksWp_attachment';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Post_LinksWp_AttachmentFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Post_LinksWp_AttachmentFilterListInput = {
  elemMatch?: Maybe<Wordpress__Post_LinksWp_AttachmentFilterInput>;
};

export type Wordpress__Post_LinksWp_Featuredmedia = {
  __typename?: 'wordpress__POST_linksWp_featuredmedia';
  embeddable?: Maybe<Scalars['Boolean']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Post_LinksWp_FeaturedmediaFilterInput = {
  embeddable?: Maybe<BooleanQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Post_LinksWp_FeaturedmediaFilterListInput = {
  elemMatch?: Maybe<Wordpress__Post_LinksWp_FeaturedmediaFilterInput>;
};

export type Wordpress__Post_LinksWp_Term = {
  __typename?: 'wordpress__POST_linksWp_term';
  taxonomy?: Maybe<Scalars['String']>;
  embeddable?: Maybe<Scalars['Boolean']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Post_LinksWp_TermFilterInput = {
  taxonomy?: Maybe<StringQueryOperatorInput>;
  embeddable?: Maybe<BooleanQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Post_LinksWp_TermFilterListInput = {
  elemMatch?: Maybe<Wordpress__Post_LinksWp_TermFilterInput>;
};

export type Wordpress__PostConnection = {
  __typename?: 'wordpress__POSTConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__PostEdge>;
  nodes: Array<Wordpress__Post>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__PostGroupConnection>;
};


export type Wordpress__PostConnectionDistinctArgs = {
  field: Wordpress__PostFieldsEnum;
};


export type Wordpress__PostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__PostFieldsEnum;
};

export type Wordpress__PostEdge = {
  __typename?: 'wordpress__POSTEdge';
  next?: Maybe<Wordpress__Post>;
  node: Wordpress__Post;
  previous?: Maybe<Wordpress__Post>;
};

export enum Wordpress__PostFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  WordpressId = 'wordpress_id',
  Date = 'date',
  Guid = 'guid',
  Modified = 'modified',
  Slug = 'slug',
  Status = 'status',
  Type = 'type',
  Link = 'link',
  Title = 'title',
  Content = 'content',
  Excerpt = 'excerpt',
  CommentStatus = 'comment_status',
  PingStatus = 'ping_status',
  Sticky = 'sticky',
  Template = 'template',
  Format = 'format',
  LinksSelf = '_links___self',
  LinksSelfHref = '_links___self___href',
  LinksCollection = '_links___collection',
  LinksCollectionHref = '_links___collection___href',
  LinksAbout = '_links___about',
  LinksAboutHref = '_links___about___href',
  LinksAuthor = '_links___author',
  LinksAuthorEmbeddable = '_links___author___embeddable',
  LinksAuthorHref = '_links___author___href',
  LinksReplies = '_links___replies',
  LinksRepliesEmbeddable = '_links___replies___embeddable',
  LinksRepliesHref = '_links___replies___href',
  LinksVersionHistory = '_links___version_history',
  LinksVersionHistoryCount = '_links___version_history___count',
  LinksVersionHistoryHref = '_links___version_history___href',
  LinksPredecessorVersion = '_links___predecessor_version',
  LinksPredecessorVersionWordpressId = '_links___predecessor_version___wordpress_id',
  LinksPredecessorVersionHref = '_links___predecessor_version___href',
  LinksWpFeaturedmedia = '_links___wp_featuredmedia',
  LinksWpFeaturedmediaEmbeddable = '_links___wp_featuredmedia___embeddable',
  LinksWpFeaturedmediaHref = '_links___wp_featuredmedia___href',
  LinksWpAttachment = '_links___wp_attachment',
  LinksWpAttachmentHref = '_links___wp_attachment___href',
  LinksWpTerm = '_links___wp_term',
  LinksWpTermTaxonomy = '_links___wp_term___taxonomy',
  LinksWpTermEmbeddable = '_links___wp_term___embeddable',
  LinksWpTermHref = '_links___wp_term___href',
  LinksCuries = '_links___curies',
  LinksCuriesName = '_links___curies___name',
  LinksCuriesHref = '_links___curies___href',
  LinksCuriesTemplated = '_links___curies___templated',
  AuthorId = 'author___id',
  AuthorParentId = 'author___parent___id',
  AuthorParentParentId = 'author___parent___parent___id',
  AuthorParentParentChildren = 'author___parent___parent___children',
  AuthorParentChildren = 'author___parent___children',
  AuthorParentChildrenId = 'author___parent___children___id',
  AuthorParentChildrenChildren = 'author___parent___children___children',
  AuthorParentInternalContent = 'author___parent___internal___content',
  AuthorParentInternalContentDigest = 'author___parent___internal___contentDigest',
  AuthorParentInternalDescription = 'author___parent___internal___description',
  AuthorParentInternalFieldOwners = 'author___parent___internal___fieldOwners',
  AuthorParentInternalIgnoreType = 'author___parent___internal___ignoreType',
  AuthorParentInternalMediaType = 'author___parent___internal___mediaType',
  AuthorParentInternalOwner = 'author___parent___internal___owner',
  AuthorParentInternalType = 'author___parent___internal___type',
  AuthorChildren = 'author___children',
  AuthorChildrenId = 'author___children___id',
  AuthorChildrenParentId = 'author___children___parent___id',
  AuthorChildrenParentChildren = 'author___children___parent___children',
  AuthorChildrenChildren = 'author___children___children',
  AuthorChildrenChildrenId = 'author___children___children___id',
  AuthorChildrenChildrenChildren = 'author___children___children___children',
  AuthorChildrenInternalContent = 'author___children___internal___content',
  AuthorChildrenInternalContentDigest = 'author___children___internal___contentDigest',
  AuthorChildrenInternalDescription = 'author___children___internal___description',
  AuthorChildrenInternalFieldOwners = 'author___children___internal___fieldOwners',
  AuthorChildrenInternalIgnoreType = 'author___children___internal___ignoreType',
  AuthorChildrenInternalMediaType = 'author___children___internal___mediaType',
  AuthorChildrenInternalOwner = 'author___children___internal___owner',
  AuthorChildrenInternalType = 'author___children___internal___type',
  AuthorInternalContent = 'author___internal___content',
  AuthorInternalContentDigest = 'author___internal___contentDigest',
  AuthorInternalDescription = 'author___internal___description',
  AuthorInternalFieldOwners = 'author___internal___fieldOwners',
  AuthorInternalIgnoreType = 'author___internal___ignoreType',
  AuthorInternalMediaType = 'author___internal___mediaType',
  AuthorInternalOwner = 'author___internal___owner',
  AuthorInternalType = 'author___internal___type',
  AuthorWordpressId = 'author___wordpress_id',
  AuthorName = 'author___name',
  AuthorUrl = 'author___url',
  AuthorDescription = 'author___description',
  AuthorLink = 'author___link',
  AuthorSlug = 'author___slug',
  AuthorAvatarUrlsWordpress_24 = 'author___avatar_urls___wordpress_24',
  AuthorAvatarUrlsWordpress_48 = 'author___avatar_urls___wordpress_48',
  AuthorAvatarUrlsWordpress_96 = 'author___avatar_urls___wordpress_96',
  AuthorLinksSelf = 'author____links___self',
  AuthorLinksSelfHref = 'author____links___self___href',
  AuthorLinksCollection = 'author____links___collection',
  AuthorLinksCollectionHref = 'author____links___collection___href',
  AuthorAuthoredWordpressPage = 'author___authored_wordpress__PAGE',
  AuthorAuthoredWordpressPageId = 'author___authored_wordpress__PAGE___id',
  AuthorAuthoredWordpressPageParentId = 'author___authored_wordpress__PAGE___parent___id',
  AuthorAuthoredWordpressPageParentChildren = 'author___authored_wordpress__PAGE___parent___children',
  AuthorAuthoredWordpressPageChildren = 'author___authored_wordpress__PAGE___children',
  AuthorAuthoredWordpressPageChildrenId = 'author___authored_wordpress__PAGE___children___id',
  AuthorAuthoredWordpressPageChildrenChildren = 'author___authored_wordpress__PAGE___children___children',
  AuthorAuthoredWordpressPageInternalContent = 'author___authored_wordpress__PAGE___internal___content',
  AuthorAuthoredWordpressPageInternalContentDigest = 'author___authored_wordpress__PAGE___internal___contentDigest',
  AuthorAuthoredWordpressPageInternalDescription = 'author___authored_wordpress__PAGE___internal___description',
  AuthorAuthoredWordpressPageInternalFieldOwners = 'author___authored_wordpress__PAGE___internal___fieldOwners',
  AuthorAuthoredWordpressPageInternalIgnoreType = 'author___authored_wordpress__PAGE___internal___ignoreType',
  AuthorAuthoredWordpressPageInternalMediaType = 'author___authored_wordpress__PAGE___internal___mediaType',
  AuthorAuthoredWordpressPageInternalOwner = 'author___authored_wordpress__PAGE___internal___owner',
  AuthorAuthoredWordpressPageInternalType = 'author___authored_wordpress__PAGE___internal___type',
  AuthorAuthoredWordpressPageWordpressId = 'author___authored_wordpress__PAGE___wordpress_id',
  AuthorAuthoredWordpressPageDate = 'author___authored_wordpress__PAGE___date',
  AuthorAuthoredWordpressPageGuid = 'author___authored_wordpress__PAGE___guid',
  AuthorAuthoredWordpressPageModified = 'author___authored_wordpress__PAGE___modified',
  AuthorAuthoredWordpressPageSlug = 'author___authored_wordpress__PAGE___slug',
  AuthorAuthoredWordpressPageStatus = 'author___authored_wordpress__PAGE___status',
  AuthorAuthoredWordpressPageType = 'author___authored_wordpress__PAGE___type',
  AuthorAuthoredWordpressPageLink = 'author___authored_wordpress__PAGE___link',
  AuthorAuthoredWordpressPageTitle = 'author___authored_wordpress__PAGE___title',
  AuthorAuthoredWordpressPageContent = 'author___authored_wordpress__PAGE___content',
  AuthorAuthoredWordpressPageExcerpt = 'author___authored_wordpress__PAGE___excerpt',
  AuthorAuthoredWordpressPageWordpressParent = 'author___authored_wordpress__PAGE___wordpress_parent',
  AuthorAuthoredWordpressPageMenuOrder = 'author___authored_wordpress__PAGE___menu_order',
  AuthorAuthoredWordpressPageCommentStatus = 'author___authored_wordpress__PAGE___comment_status',
  AuthorAuthoredWordpressPagePingStatus = 'author___authored_wordpress__PAGE___ping_status',
  AuthorAuthoredWordpressPageTemplate = 'author___authored_wordpress__PAGE___template',
  AuthorAuthoredWordpressPageLinksSelf = 'author___authored_wordpress__PAGE____links___self',
  AuthorAuthoredWordpressPageLinksCollection = 'author___authored_wordpress__PAGE____links___collection',
  AuthorAuthoredWordpressPageLinksAbout = 'author___authored_wordpress__PAGE____links___about',
  AuthorAuthoredWordpressPageLinksAuthor = 'author___authored_wordpress__PAGE____links___author',
  AuthorAuthoredWordpressPageLinksReplies = 'author___authored_wordpress__PAGE____links___replies',
  AuthorAuthoredWordpressPageLinksVersionHistory = 'author___authored_wordpress__PAGE____links___version_history',
  AuthorAuthoredWordpressPageLinksPredecessorVersion = 'author___authored_wordpress__PAGE____links___predecessor_version',
  AuthorAuthoredWordpressPageLinksWpAttachment = 'author___authored_wordpress__PAGE____links___wp_attachment',
  AuthorAuthoredWordpressPageLinksCuries = 'author___authored_wordpress__PAGE____links___curies',
  AuthorAuthoredWordpressPageAuthorId = 'author___authored_wordpress__PAGE___author___id',
  AuthorAuthoredWordpressPageAuthorChildren = 'author___authored_wordpress__PAGE___author___children',
  AuthorAuthoredWordpressPageAuthorWordpressId = 'author___authored_wordpress__PAGE___author___wordpress_id',
  AuthorAuthoredWordpressPageAuthorName = 'author___authored_wordpress__PAGE___author___name',
  AuthorAuthoredWordpressPageAuthorUrl = 'author___authored_wordpress__PAGE___author___url',
  AuthorAuthoredWordpressPageAuthorDescription = 'author___authored_wordpress__PAGE___author___description',
  AuthorAuthoredWordpressPageAuthorLink = 'author___authored_wordpress__PAGE___author___link',
  AuthorAuthoredWordpressPageAuthorSlug = 'author___authored_wordpress__PAGE___author___slug',
  AuthorAuthoredWordpressPageAuthorAuthoredWordpressPage = 'author___authored_wordpress__PAGE___author___authored_wordpress__PAGE',
  AuthorAuthoredWordpressPageAuthorAuthoredWordpressWpMedia = 'author___authored_wordpress__PAGE___author___authored_wordpress__wp_media',
  AuthorAuthoredWordpressPageAuthorPath = 'author___authored_wordpress__PAGE___author___path',
  AuthorAuthoredWordpressPageAuthorAuthoredWordpressPost = 'author___authored_wordpress__PAGE___author___authored_wordpress__POST',
  AuthorAuthoredWordpressPagePath = 'author___authored_wordpress__PAGE___path',
  AuthorAuthoredWordpressWpMedia = 'author___authored_wordpress__wp_media',
  AuthorAuthoredWordpressWpMediaId = 'author___authored_wordpress__wp_media___id',
  AuthorAuthoredWordpressWpMediaParentId = 'author___authored_wordpress__wp_media___parent___id',
  AuthorAuthoredWordpressWpMediaParentChildren = 'author___authored_wordpress__wp_media___parent___children',
  AuthorAuthoredWordpressWpMediaChildren = 'author___authored_wordpress__wp_media___children',
  AuthorAuthoredWordpressWpMediaChildrenId = 'author___authored_wordpress__wp_media___children___id',
  AuthorAuthoredWordpressWpMediaChildrenChildren = 'author___authored_wordpress__wp_media___children___children',
  AuthorAuthoredWordpressWpMediaInternalContent = 'author___authored_wordpress__wp_media___internal___content',
  AuthorAuthoredWordpressWpMediaInternalContentDigest = 'author___authored_wordpress__wp_media___internal___contentDigest',
  AuthorAuthoredWordpressWpMediaInternalDescription = 'author___authored_wordpress__wp_media___internal___description',
  AuthorAuthoredWordpressWpMediaInternalFieldOwners = 'author___authored_wordpress__wp_media___internal___fieldOwners',
  AuthorAuthoredWordpressWpMediaInternalIgnoreType = 'author___authored_wordpress__wp_media___internal___ignoreType',
  AuthorAuthoredWordpressWpMediaInternalMediaType = 'author___authored_wordpress__wp_media___internal___mediaType',
  AuthorAuthoredWordpressWpMediaInternalOwner = 'author___authored_wordpress__wp_media___internal___owner',
  AuthorAuthoredWordpressWpMediaInternalType = 'author___authored_wordpress__wp_media___internal___type',
  AuthorAuthoredWordpressWpMediaWordpressId = 'author___authored_wordpress__wp_media___wordpress_id',
  AuthorAuthoredWordpressWpMediaDate = 'author___authored_wordpress__wp_media___date',
  AuthorAuthoredWordpressWpMediaModified = 'author___authored_wordpress__wp_media___modified',
  AuthorAuthoredWordpressWpMediaSlug = 'author___authored_wordpress__wp_media___slug',
  AuthorAuthoredWordpressWpMediaStatus = 'author___authored_wordpress__wp_media___status',
  AuthorAuthoredWordpressWpMediaType = 'author___authored_wordpress__wp_media___type',
  AuthorAuthoredWordpressWpMediaLink = 'author___authored_wordpress__wp_media___link',
  AuthorAuthoredWordpressWpMediaTitle = 'author___authored_wordpress__wp_media___title',
  AuthorAuthoredWordpressWpMediaCommentStatus = 'author___authored_wordpress__wp_media___comment_status',
  AuthorAuthoredWordpressWpMediaPingStatus = 'author___authored_wordpress__wp_media___ping_status',
  AuthorAuthoredWordpressWpMediaTemplate = 'author___authored_wordpress__wp_media___template',
  AuthorAuthoredWordpressWpMediaDescription = 'author___authored_wordpress__wp_media___description',
  AuthorAuthoredWordpressWpMediaCaption = 'author___authored_wordpress__wp_media___caption',
  AuthorAuthoredWordpressWpMediaAltText = 'author___authored_wordpress__wp_media___alt_text',
  AuthorAuthoredWordpressWpMediaMediaType = 'author___authored_wordpress__wp_media___media_type',
  AuthorAuthoredWordpressWpMediaMimeType = 'author___authored_wordpress__wp_media___mime_type',
  AuthorAuthoredWordpressWpMediaMediaDetailsWidth = 'author___authored_wordpress__wp_media___media_details___width',
  AuthorAuthoredWordpressWpMediaMediaDetailsHeight = 'author___authored_wordpress__wp_media___media_details___height',
  AuthorAuthoredWordpressWpMediaMediaDetailsFile = 'author___authored_wordpress__wp_media___media_details___file',
  AuthorAuthoredWordpressWpMediaMediaDetailsOriginalImage = 'author___authored_wordpress__wp_media___media_details___original_image',
  AuthorAuthoredWordpressWpMediaSourceUrl = 'author___authored_wordpress__wp_media___source_url',
  AuthorAuthoredWordpressWpMediaLinksSelf = 'author___authored_wordpress__wp_media____links___self',
  AuthorAuthoredWordpressWpMediaLinksCollection = 'author___authored_wordpress__wp_media____links___collection',
  AuthorAuthoredWordpressWpMediaLinksAbout = 'author___authored_wordpress__wp_media____links___about',
  AuthorAuthoredWordpressWpMediaLinksAuthor = 'author___authored_wordpress__wp_media____links___author',
  AuthorAuthoredWordpressWpMediaLinksReplies = 'author___authored_wordpress__wp_media____links___replies',
  AuthorAuthoredWordpressWpMediaAuthorId = 'author___authored_wordpress__wp_media___author___id',
  AuthorAuthoredWordpressWpMediaAuthorChildren = 'author___authored_wordpress__wp_media___author___children',
  AuthorAuthoredWordpressWpMediaAuthorWordpressId = 'author___authored_wordpress__wp_media___author___wordpress_id',
  AuthorAuthoredWordpressWpMediaAuthorName = 'author___authored_wordpress__wp_media___author___name',
  AuthorAuthoredWordpressWpMediaAuthorUrl = 'author___authored_wordpress__wp_media___author___url',
  AuthorAuthoredWordpressWpMediaAuthorDescription = 'author___authored_wordpress__wp_media___author___description',
  AuthorAuthoredWordpressWpMediaAuthorLink = 'author___authored_wordpress__wp_media___author___link',
  AuthorAuthoredWordpressWpMediaAuthorSlug = 'author___authored_wordpress__wp_media___author___slug',
  AuthorAuthoredWordpressWpMediaAuthorAuthoredWordpressPage = 'author___authored_wordpress__wp_media___author___authored_wordpress__PAGE',
  AuthorAuthoredWordpressWpMediaAuthorAuthoredWordpressWpMedia = 'author___authored_wordpress__wp_media___author___authored_wordpress__wp_media',
  AuthorAuthoredWordpressWpMediaAuthorPath = 'author___authored_wordpress__wp_media___author___path',
  AuthorAuthoredWordpressWpMediaAuthorAuthoredWordpressPost = 'author___authored_wordpress__wp_media___author___authored_wordpress__POST',
  AuthorAuthoredWordpressWpMediaGuidId = 'author___authored_wordpress__wp_media___guid___id',
  AuthorAuthoredWordpressWpMediaGuidChildren = 'author___authored_wordpress__wp_media___guid___children',
  AuthorAuthoredWordpressWpMediaGuidWordpressId = 'author___authored_wordpress__wp_media___guid___wordpress_id',
  AuthorAuthoredWordpressWpMediaGuidDate = 'author___authored_wordpress__wp_media___guid___date',
  AuthorAuthoredWordpressWpMediaGuidModified = 'author___authored_wordpress__wp_media___guid___modified',
  AuthorAuthoredWordpressWpMediaGuidSlug = 'author___authored_wordpress__wp_media___guid___slug',
  AuthorAuthoredWordpressWpMediaGuidStatus = 'author___authored_wordpress__wp_media___guid___status',
  AuthorAuthoredWordpressWpMediaGuidType = 'author___authored_wordpress__wp_media___guid___type',
  AuthorAuthoredWordpressWpMediaGuidLink = 'author___authored_wordpress__wp_media___guid___link',
  AuthorAuthoredWordpressWpMediaGuidTitle = 'author___authored_wordpress__wp_media___guid___title',
  AuthorAuthoredWordpressWpMediaGuidCommentStatus = 'author___authored_wordpress__wp_media___guid___comment_status',
  AuthorAuthoredWordpressWpMediaGuidPingStatus = 'author___authored_wordpress__wp_media___guid___ping_status',
  AuthorAuthoredWordpressWpMediaGuidTemplate = 'author___authored_wordpress__wp_media___guid___template',
  AuthorAuthoredWordpressWpMediaGuidDescription = 'author___authored_wordpress__wp_media___guid___description',
  AuthorAuthoredWordpressWpMediaGuidCaption = 'author___authored_wordpress__wp_media___guid___caption',
  AuthorAuthoredWordpressWpMediaGuidAltText = 'author___authored_wordpress__wp_media___guid___alt_text',
  AuthorAuthoredWordpressWpMediaGuidMediaType = 'author___authored_wordpress__wp_media___guid___media_type',
  AuthorAuthoredWordpressWpMediaGuidMimeType = 'author___authored_wordpress__wp_media___guid___mime_type',
  AuthorAuthoredWordpressWpMediaGuidSourceUrl = 'author___authored_wordpress__wp_media___guid___source_url',
  AuthorAuthoredWordpressWpMediaGuidPath = 'author___authored_wordpress__wp_media___guid___path',
  AuthorAuthoredWordpressWpMediaLocalFileSourceInstanceName = 'author___authored_wordpress__wp_media___localFile___sourceInstanceName',
  AuthorAuthoredWordpressWpMediaLocalFileAbsolutePath = 'author___authored_wordpress__wp_media___localFile___absolutePath',
  AuthorAuthoredWordpressWpMediaLocalFileRelativePath = 'author___authored_wordpress__wp_media___localFile___relativePath',
  AuthorAuthoredWordpressWpMediaLocalFileExtension = 'author___authored_wordpress__wp_media___localFile___extension',
  AuthorAuthoredWordpressWpMediaLocalFileSize = 'author___authored_wordpress__wp_media___localFile___size',
  AuthorAuthoredWordpressWpMediaLocalFilePrettySize = 'author___authored_wordpress__wp_media___localFile___prettySize',
  AuthorAuthoredWordpressWpMediaLocalFileModifiedTime = 'author___authored_wordpress__wp_media___localFile___modifiedTime',
  AuthorAuthoredWordpressWpMediaLocalFileAccessTime = 'author___authored_wordpress__wp_media___localFile___accessTime',
  AuthorAuthoredWordpressWpMediaLocalFileChangeTime = 'author___authored_wordpress__wp_media___localFile___changeTime',
  AuthorAuthoredWordpressWpMediaLocalFileBirthTime = 'author___authored_wordpress__wp_media___localFile___birthTime',
  AuthorAuthoredWordpressWpMediaLocalFileRoot = 'author___authored_wordpress__wp_media___localFile___root',
  AuthorAuthoredWordpressWpMediaLocalFileDir = 'author___authored_wordpress__wp_media___localFile___dir',
  AuthorAuthoredWordpressWpMediaLocalFileBase = 'author___authored_wordpress__wp_media___localFile___base',
  AuthorAuthoredWordpressWpMediaLocalFileExt = 'author___authored_wordpress__wp_media___localFile___ext',
  AuthorAuthoredWordpressWpMediaLocalFileName = 'author___authored_wordpress__wp_media___localFile___name',
  AuthorAuthoredWordpressWpMediaLocalFileRelativeDirectory = 'author___authored_wordpress__wp_media___localFile___relativeDirectory',
  AuthorAuthoredWordpressWpMediaLocalFileDev = 'author___authored_wordpress__wp_media___localFile___dev',
  AuthorAuthoredWordpressWpMediaLocalFileMode = 'author___authored_wordpress__wp_media___localFile___mode',
  AuthorAuthoredWordpressWpMediaLocalFileNlink = 'author___authored_wordpress__wp_media___localFile___nlink',
  AuthorAuthoredWordpressWpMediaLocalFileUid = 'author___authored_wordpress__wp_media___localFile___uid',
  AuthorAuthoredWordpressWpMediaLocalFileGid = 'author___authored_wordpress__wp_media___localFile___gid',
  AuthorAuthoredWordpressWpMediaLocalFileRdev = 'author___authored_wordpress__wp_media___localFile___rdev',
  AuthorAuthoredWordpressWpMediaLocalFileIno = 'author___authored_wordpress__wp_media___localFile___ino',
  AuthorAuthoredWordpressWpMediaLocalFileAtimeMs = 'author___authored_wordpress__wp_media___localFile___atimeMs',
  AuthorAuthoredWordpressWpMediaLocalFileMtimeMs = 'author___authored_wordpress__wp_media___localFile___mtimeMs',
  AuthorAuthoredWordpressWpMediaLocalFileCtimeMs = 'author___authored_wordpress__wp_media___localFile___ctimeMs',
  AuthorAuthoredWordpressWpMediaLocalFileAtime = 'author___authored_wordpress__wp_media___localFile___atime',
  AuthorAuthoredWordpressWpMediaLocalFileMtime = 'author___authored_wordpress__wp_media___localFile___mtime',
  AuthorAuthoredWordpressWpMediaLocalFileCtime = 'author___authored_wordpress__wp_media___localFile___ctime',
  AuthorAuthoredWordpressWpMediaLocalFileBirthtime = 'author___authored_wordpress__wp_media___localFile___birthtime',
  AuthorAuthoredWordpressWpMediaLocalFileBirthtimeMs = 'author___authored_wordpress__wp_media___localFile___birthtimeMs',
  AuthorAuthoredWordpressWpMediaLocalFileBlksize = 'author___authored_wordpress__wp_media___localFile___blksize',
  AuthorAuthoredWordpressWpMediaLocalFileBlocks = 'author___authored_wordpress__wp_media___localFile___blocks',
  AuthorAuthoredWordpressWpMediaLocalFileUrl = 'author___authored_wordpress__wp_media___localFile___url',
  AuthorAuthoredWordpressWpMediaLocalFileId = 'author___authored_wordpress__wp_media___localFile___id',
  AuthorAuthoredWordpressWpMediaLocalFileChildren = 'author___authored_wordpress__wp_media___localFile___children',
  AuthorAuthoredWordpressWpMediaPath = 'author___authored_wordpress__wp_media___path',
  AuthorPath = 'author___path',
  AuthorAuthoredWordpressPost = 'author___authored_wordpress__POST',
  AuthorAuthoredWordpressPostId = 'author___authored_wordpress__POST___id',
  AuthorAuthoredWordpressPostParentId = 'author___authored_wordpress__POST___parent___id',
  AuthorAuthoredWordpressPostParentChildren = 'author___authored_wordpress__POST___parent___children',
  AuthorAuthoredWordpressPostChildren = 'author___authored_wordpress__POST___children',
  AuthorAuthoredWordpressPostChildrenId = 'author___authored_wordpress__POST___children___id',
  AuthorAuthoredWordpressPostChildrenChildren = 'author___authored_wordpress__POST___children___children',
  AuthorAuthoredWordpressPostInternalContent = 'author___authored_wordpress__POST___internal___content',
  AuthorAuthoredWordpressPostInternalContentDigest = 'author___authored_wordpress__POST___internal___contentDigest',
  AuthorAuthoredWordpressPostInternalDescription = 'author___authored_wordpress__POST___internal___description',
  AuthorAuthoredWordpressPostInternalFieldOwners = 'author___authored_wordpress__POST___internal___fieldOwners',
  AuthorAuthoredWordpressPostInternalIgnoreType = 'author___authored_wordpress__POST___internal___ignoreType',
  AuthorAuthoredWordpressPostInternalMediaType = 'author___authored_wordpress__POST___internal___mediaType',
  AuthorAuthoredWordpressPostInternalOwner = 'author___authored_wordpress__POST___internal___owner',
  AuthorAuthoredWordpressPostInternalType = 'author___authored_wordpress__POST___internal___type',
  AuthorAuthoredWordpressPostWordpressId = 'author___authored_wordpress__POST___wordpress_id',
  AuthorAuthoredWordpressPostDate = 'author___authored_wordpress__POST___date',
  AuthorAuthoredWordpressPostGuid = 'author___authored_wordpress__POST___guid',
  AuthorAuthoredWordpressPostModified = 'author___authored_wordpress__POST___modified',
  AuthorAuthoredWordpressPostSlug = 'author___authored_wordpress__POST___slug',
  AuthorAuthoredWordpressPostStatus = 'author___authored_wordpress__POST___status',
  AuthorAuthoredWordpressPostType = 'author___authored_wordpress__POST___type',
  AuthorAuthoredWordpressPostLink = 'author___authored_wordpress__POST___link',
  AuthorAuthoredWordpressPostTitle = 'author___authored_wordpress__POST___title',
  AuthorAuthoredWordpressPostContent = 'author___authored_wordpress__POST___content',
  AuthorAuthoredWordpressPostExcerpt = 'author___authored_wordpress__POST___excerpt',
  AuthorAuthoredWordpressPostCommentStatus = 'author___authored_wordpress__POST___comment_status',
  AuthorAuthoredWordpressPostPingStatus = 'author___authored_wordpress__POST___ping_status',
  AuthorAuthoredWordpressPostSticky = 'author___authored_wordpress__POST___sticky',
  AuthorAuthoredWordpressPostTemplate = 'author___authored_wordpress__POST___template',
  AuthorAuthoredWordpressPostFormat = 'author___authored_wordpress__POST___format',
  AuthorAuthoredWordpressPostLinksSelf = 'author___authored_wordpress__POST____links___self',
  AuthorAuthoredWordpressPostLinksCollection = 'author___authored_wordpress__POST____links___collection',
  AuthorAuthoredWordpressPostLinksAbout = 'author___authored_wordpress__POST____links___about',
  AuthorAuthoredWordpressPostLinksAuthor = 'author___authored_wordpress__POST____links___author',
  AuthorAuthoredWordpressPostLinksReplies = 'author___authored_wordpress__POST____links___replies',
  AuthorAuthoredWordpressPostLinksVersionHistory = 'author___authored_wordpress__POST____links___version_history',
  AuthorAuthoredWordpressPostLinksPredecessorVersion = 'author___authored_wordpress__POST____links___predecessor_version',
  AuthorAuthoredWordpressPostLinksWpFeaturedmedia = 'author___authored_wordpress__POST____links___wp_featuredmedia',
  AuthorAuthoredWordpressPostLinksWpAttachment = 'author___authored_wordpress__POST____links___wp_attachment',
  AuthorAuthoredWordpressPostLinksWpTerm = 'author___authored_wordpress__POST____links___wp_term',
  AuthorAuthoredWordpressPostLinksCuries = 'author___authored_wordpress__POST____links___curies',
  AuthorAuthoredWordpressPostAuthorId = 'author___authored_wordpress__POST___author___id',
  AuthorAuthoredWordpressPostAuthorChildren = 'author___authored_wordpress__POST___author___children',
  AuthorAuthoredWordpressPostAuthorWordpressId = 'author___authored_wordpress__POST___author___wordpress_id',
  AuthorAuthoredWordpressPostAuthorName = 'author___authored_wordpress__POST___author___name',
  AuthorAuthoredWordpressPostAuthorUrl = 'author___authored_wordpress__POST___author___url',
  AuthorAuthoredWordpressPostAuthorDescription = 'author___authored_wordpress__POST___author___description',
  AuthorAuthoredWordpressPostAuthorLink = 'author___authored_wordpress__POST___author___link',
  AuthorAuthoredWordpressPostAuthorSlug = 'author___authored_wordpress__POST___author___slug',
  AuthorAuthoredWordpressPostAuthorAuthoredWordpressPage = 'author___authored_wordpress__POST___author___authored_wordpress__PAGE',
  AuthorAuthoredWordpressPostAuthorAuthoredWordpressWpMedia = 'author___authored_wordpress__POST___author___authored_wordpress__wp_media',
  AuthorAuthoredWordpressPostAuthorPath = 'author___authored_wordpress__POST___author___path',
  AuthorAuthoredWordpressPostAuthorAuthoredWordpressPost = 'author___authored_wordpress__POST___author___authored_wordpress__POST',
  AuthorAuthoredWordpressPostCategories = 'author___authored_wordpress__POST___categories',
  AuthorAuthoredWordpressPostCategoriesId = 'author___authored_wordpress__POST___categories___id',
  AuthorAuthoredWordpressPostCategoriesChildren = 'author___authored_wordpress__POST___categories___children',
  AuthorAuthoredWordpressPostCategoriesWordpressId = 'author___authored_wordpress__POST___categories___wordpress_id',
  AuthorAuthoredWordpressPostCategoriesCount = 'author___authored_wordpress__POST___categories___count',
  AuthorAuthoredWordpressPostCategoriesDescription = 'author___authored_wordpress__POST___categories___description',
  AuthorAuthoredWordpressPostCategoriesLink = 'author___authored_wordpress__POST___categories___link',
  AuthorAuthoredWordpressPostCategoriesName = 'author___authored_wordpress__POST___categories___name',
  AuthorAuthoredWordpressPostCategoriesSlug = 'author___authored_wordpress__POST___categories___slug',
  AuthorAuthoredWordpressPostCategoriesWordpressParent = 'author___authored_wordpress__POST___categories___wordpress_parent',
  AuthorAuthoredWordpressPostCategoriesPath = 'author___authored_wordpress__POST___categories___path',
  AuthorAuthoredWordpressPostFeaturedMediaId = 'author___authored_wordpress__POST___featured_media___id',
  AuthorAuthoredWordpressPostFeaturedMediaChildren = 'author___authored_wordpress__POST___featured_media___children',
  AuthorAuthoredWordpressPostFeaturedMediaWordpressId = 'author___authored_wordpress__POST___featured_media___wordpress_id',
  AuthorAuthoredWordpressPostFeaturedMediaDate = 'author___authored_wordpress__POST___featured_media___date',
  AuthorAuthoredWordpressPostFeaturedMediaModified = 'author___authored_wordpress__POST___featured_media___modified',
  AuthorAuthoredWordpressPostFeaturedMediaSlug = 'author___authored_wordpress__POST___featured_media___slug',
  AuthorAuthoredWordpressPostFeaturedMediaStatus = 'author___authored_wordpress__POST___featured_media___status',
  AuthorAuthoredWordpressPostFeaturedMediaType = 'author___authored_wordpress__POST___featured_media___type',
  AuthorAuthoredWordpressPostFeaturedMediaLink = 'author___authored_wordpress__POST___featured_media___link',
  AuthorAuthoredWordpressPostFeaturedMediaTitle = 'author___authored_wordpress__POST___featured_media___title',
  AuthorAuthoredWordpressPostFeaturedMediaCommentStatus = 'author___authored_wordpress__POST___featured_media___comment_status',
  AuthorAuthoredWordpressPostFeaturedMediaPingStatus = 'author___authored_wordpress__POST___featured_media___ping_status',
  AuthorAuthoredWordpressPostFeaturedMediaTemplate = 'author___authored_wordpress__POST___featured_media___template',
  AuthorAuthoredWordpressPostFeaturedMediaDescription = 'author___authored_wordpress__POST___featured_media___description',
  AuthorAuthoredWordpressPostFeaturedMediaCaption = 'author___authored_wordpress__POST___featured_media___caption',
  AuthorAuthoredWordpressPostFeaturedMediaAltText = 'author___authored_wordpress__POST___featured_media___alt_text',
  AuthorAuthoredWordpressPostFeaturedMediaMediaType = 'author___authored_wordpress__POST___featured_media___media_type',
  AuthorAuthoredWordpressPostFeaturedMediaMimeType = 'author___authored_wordpress__POST___featured_media___mime_type',
  AuthorAuthoredWordpressPostFeaturedMediaSourceUrl = 'author___authored_wordpress__POST___featured_media___source_url',
  AuthorAuthoredWordpressPostFeaturedMediaPath = 'author___authored_wordpress__POST___featured_media___path',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlId = 'author___authored_wordpress__POST___jetpack_featured_media_url___id',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlChildren = 'author___authored_wordpress__POST___jetpack_featured_media_url___children',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlWordpressId = 'author___authored_wordpress__POST___jetpack_featured_media_url___wordpress_id',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlDate = 'author___authored_wordpress__POST___jetpack_featured_media_url___date',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlModified = 'author___authored_wordpress__POST___jetpack_featured_media_url___modified',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlSlug = 'author___authored_wordpress__POST___jetpack_featured_media_url___slug',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlStatus = 'author___authored_wordpress__POST___jetpack_featured_media_url___status',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlType = 'author___authored_wordpress__POST___jetpack_featured_media_url___type',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlLink = 'author___authored_wordpress__POST___jetpack_featured_media_url___link',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlTitle = 'author___authored_wordpress__POST___jetpack_featured_media_url___title',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlCommentStatus = 'author___authored_wordpress__POST___jetpack_featured_media_url___comment_status',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlPingStatus = 'author___authored_wordpress__POST___jetpack_featured_media_url___ping_status',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlTemplate = 'author___authored_wordpress__POST___jetpack_featured_media_url___template',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlDescription = 'author___authored_wordpress__POST___jetpack_featured_media_url___description',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlCaption = 'author___authored_wordpress__POST___jetpack_featured_media_url___caption',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlAltText = 'author___authored_wordpress__POST___jetpack_featured_media_url___alt_text',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlMediaType = 'author___authored_wordpress__POST___jetpack_featured_media_url___media_type',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlMimeType = 'author___authored_wordpress__POST___jetpack_featured_media_url___mime_type',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlSourceUrl = 'author___authored_wordpress__POST___jetpack_featured_media_url___source_url',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlPath = 'author___authored_wordpress__POST___jetpack_featured_media_url___path',
  AuthorAuthoredWordpressPostPath = 'author___authored_wordpress__POST___path',
  AuthorAuthoredWordpressPostTags = 'author___authored_wordpress__POST___tags',
  AuthorAuthoredWordpressPostTagsId = 'author___authored_wordpress__POST___tags___id',
  AuthorAuthoredWordpressPostTagsChildren = 'author___authored_wordpress__POST___tags___children',
  AuthorAuthoredWordpressPostTagsWordpressId = 'author___authored_wordpress__POST___tags___wordpress_id',
  AuthorAuthoredWordpressPostTagsCount = 'author___authored_wordpress__POST___tags___count',
  AuthorAuthoredWordpressPostTagsDescription = 'author___authored_wordpress__POST___tags___description',
  AuthorAuthoredWordpressPostTagsLink = 'author___authored_wordpress__POST___tags___link',
  AuthorAuthoredWordpressPostTagsName = 'author___authored_wordpress__POST___tags___name',
  AuthorAuthoredWordpressPostTagsSlug = 'author___authored_wordpress__POST___tags___slug',
  AuthorAuthoredWordpressPostTagsPath = 'author___authored_wordpress__POST___tags___path',
  Categories = 'categories',
  CategoriesId = 'categories___id',
  CategoriesParentId = 'categories___parent___id',
  CategoriesParentParentId = 'categories___parent___parent___id',
  CategoriesParentParentChildren = 'categories___parent___parent___children',
  CategoriesParentChildren = 'categories___parent___children',
  CategoriesParentChildrenId = 'categories___parent___children___id',
  CategoriesParentChildrenChildren = 'categories___parent___children___children',
  CategoriesParentInternalContent = 'categories___parent___internal___content',
  CategoriesParentInternalContentDigest = 'categories___parent___internal___contentDigest',
  CategoriesParentInternalDescription = 'categories___parent___internal___description',
  CategoriesParentInternalFieldOwners = 'categories___parent___internal___fieldOwners',
  CategoriesParentInternalIgnoreType = 'categories___parent___internal___ignoreType',
  CategoriesParentInternalMediaType = 'categories___parent___internal___mediaType',
  CategoriesParentInternalOwner = 'categories___parent___internal___owner',
  CategoriesParentInternalType = 'categories___parent___internal___type',
  CategoriesChildren = 'categories___children',
  CategoriesChildrenId = 'categories___children___id',
  CategoriesChildrenParentId = 'categories___children___parent___id',
  CategoriesChildrenParentChildren = 'categories___children___parent___children',
  CategoriesChildrenChildren = 'categories___children___children',
  CategoriesChildrenChildrenId = 'categories___children___children___id',
  CategoriesChildrenChildrenChildren = 'categories___children___children___children',
  CategoriesChildrenInternalContent = 'categories___children___internal___content',
  CategoriesChildrenInternalContentDigest = 'categories___children___internal___contentDigest',
  CategoriesChildrenInternalDescription = 'categories___children___internal___description',
  CategoriesChildrenInternalFieldOwners = 'categories___children___internal___fieldOwners',
  CategoriesChildrenInternalIgnoreType = 'categories___children___internal___ignoreType',
  CategoriesChildrenInternalMediaType = 'categories___children___internal___mediaType',
  CategoriesChildrenInternalOwner = 'categories___children___internal___owner',
  CategoriesChildrenInternalType = 'categories___children___internal___type',
  CategoriesInternalContent = 'categories___internal___content',
  CategoriesInternalContentDigest = 'categories___internal___contentDigest',
  CategoriesInternalDescription = 'categories___internal___description',
  CategoriesInternalFieldOwners = 'categories___internal___fieldOwners',
  CategoriesInternalIgnoreType = 'categories___internal___ignoreType',
  CategoriesInternalMediaType = 'categories___internal___mediaType',
  CategoriesInternalOwner = 'categories___internal___owner',
  CategoriesInternalType = 'categories___internal___type',
  CategoriesWordpressId = 'categories___wordpress_id',
  CategoriesCount = 'categories___count',
  CategoriesDescription = 'categories___description',
  CategoriesLink = 'categories___link',
  CategoriesName = 'categories___name',
  CategoriesSlug = 'categories___slug',
  CategoriesWordpressParent = 'categories___wordpress_parent',
  CategoriesLinksSelf = 'categories____links___self',
  CategoriesLinksSelfHref = 'categories____links___self___href',
  CategoriesLinksCollection = 'categories____links___collection',
  CategoriesLinksCollectionHref = 'categories____links___collection___href',
  CategoriesLinksAbout = 'categories____links___about',
  CategoriesLinksAboutHref = 'categories____links___about___href',
  CategoriesLinksWpPostType = 'categories____links___wp_post_type',
  CategoriesLinksWpPostTypeHref = 'categories____links___wp_post_type___href',
  CategoriesLinksCuries = 'categories____links___curies',
  CategoriesLinksCuriesName = 'categories____links___curies___name',
  CategoriesLinksCuriesHref = 'categories____links___curies___href',
  CategoriesLinksCuriesTemplated = 'categories____links___curies___templated',
  CategoriesTaxonomyId = 'categories___taxonomy___id',
  CategoriesTaxonomyParentId = 'categories___taxonomy___parent___id',
  CategoriesTaxonomyParentChildren = 'categories___taxonomy___parent___children',
  CategoriesTaxonomyChildren = 'categories___taxonomy___children',
  CategoriesTaxonomyChildrenId = 'categories___taxonomy___children___id',
  CategoriesTaxonomyChildrenChildren = 'categories___taxonomy___children___children',
  CategoriesTaxonomyInternalContent = 'categories___taxonomy___internal___content',
  CategoriesTaxonomyInternalContentDigest = 'categories___taxonomy___internal___contentDigest',
  CategoriesTaxonomyInternalDescription = 'categories___taxonomy___internal___description',
  CategoriesTaxonomyInternalFieldOwners = 'categories___taxonomy___internal___fieldOwners',
  CategoriesTaxonomyInternalIgnoreType = 'categories___taxonomy___internal___ignoreType',
  CategoriesTaxonomyInternalMediaType = 'categories___taxonomy___internal___mediaType',
  CategoriesTaxonomyInternalOwner = 'categories___taxonomy___internal___owner',
  CategoriesTaxonomyInternalType = 'categories___taxonomy___internal___type',
  CategoriesTaxonomyWordpressId = 'categories___taxonomy___wordpress_id',
  CategoriesTaxonomyName = 'categories___taxonomy___name',
  CategoriesTaxonomySlug = 'categories___taxonomy___slug',
  CategoriesTaxonomyDescription = 'categories___taxonomy___description',
  CategoriesTaxonomyTypes = 'categories___taxonomy___types',
  CategoriesTaxonomyHierarchical = 'categories___taxonomy___hierarchical',
  CategoriesTaxonomyRestBase = 'categories___taxonomy___rest_base',
  CategoriesTaxonomyLinksCollection = 'categories___taxonomy____links___collection',
  CategoriesTaxonomyLinksWpItems = 'categories___taxonomy____links___wp_items',
  CategoriesTaxonomyLinksCuries = 'categories___taxonomy____links___curies',
  CategoriesPath = 'categories___path',
  FeaturedMediaId = 'featured_media___id',
  FeaturedMediaParentId = 'featured_media___parent___id',
  FeaturedMediaParentParentId = 'featured_media___parent___parent___id',
  FeaturedMediaParentParentChildren = 'featured_media___parent___parent___children',
  FeaturedMediaParentChildren = 'featured_media___parent___children',
  FeaturedMediaParentChildrenId = 'featured_media___parent___children___id',
  FeaturedMediaParentChildrenChildren = 'featured_media___parent___children___children',
  FeaturedMediaParentInternalContent = 'featured_media___parent___internal___content',
  FeaturedMediaParentInternalContentDigest = 'featured_media___parent___internal___contentDigest',
  FeaturedMediaParentInternalDescription = 'featured_media___parent___internal___description',
  FeaturedMediaParentInternalFieldOwners = 'featured_media___parent___internal___fieldOwners',
  FeaturedMediaParentInternalIgnoreType = 'featured_media___parent___internal___ignoreType',
  FeaturedMediaParentInternalMediaType = 'featured_media___parent___internal___mediaType',
  FeaturedMediaParentInternalOwner = 'featured_media___parent___internal___owner',
  FeaturedMediaParentInternalType = 'featured_media___parent___internal___type',
  FeaturedMediaChildren = 'featured_media___children',
  FeaturedMediaChildrenId = 'featured_media___children___id',
  FeaturedMediaChildrenParentId = 'featured_media___children___parent___id',
  FeaturedMediaChildrenParentChildren = 'featured_media___children___parent___children',
  FeaturedMediaChildrenChildren = 'featured_media___children___children',
  FeaturedMediaChildrenChildrenId = 'featured_media___children___children___id',
  FeaturedMediaChildrenChildrenChildren = 'featured_media___children___children___children',
  FeaturedMediaChildrenInternalContent = 'featured_media___children___internal___content',
  FeaturedMediaChildrenInternalContentDigest = 'featured_media___children___internal___contentDigest',
  FeaturedMediaChildrenInternalDescription = 'featured_media___children___internal___description',
  FeaturedMediaChildrenInternalFieldOwners = 'featured_media___children___internal___fieldOwners',
  FeaturedMediaChildrenInternalIgnoreType = 'featured_media___children___internal___ignoreType',
  FeaturedMediaChildrenInternalMediaType = 'featured_media___children___internal___mediaType',
  FeaturedMediaChildrenInternalOwner = 'featured_media___children___internal___owner',
  FeaturedMediaChildrenInternalType = 'featured_media___children___internal___type',
  FeaturedMediaInternalContent = 'featured_media___internal___content',
  FeaturedMediaInternalContentDigest = 'featured_media___internal___contentDigest',
  FeaturedMediaInternalDescription = 'featured_media___internal___description',
  FeaturedMediaInternalFieldOwners = 'featured_media___internal___fieldOwners',
  FeaturedMediaInternalIgnoreType = 'featured_media___internal___ignoreType',
  FeaturedMediaInternalMediaType = 'featured_media___internal___mediaType',
  FeaturedMediaInternalOwner = 'featured_media___internal___owner',
  FeaturedMediaInternalType = 'featured_media___internal___type',
  FeaturedMediaWordpressId = 'featured_media___wordpress_id',
  FeaturedMediaDate = 'featured_media___date',
  FeaturedMediaModified = 'featured_media___modified',
  FeaturedMediaSlug = 'featured_media___slug',
  FeaturedMediaStatus = 'featured_media___status',
  FeaturedMediaType = 'featured_media___type',
  FeaturedMediaLink = 'featured_media___link',
  FeaturedMediaTitle = 'featured_media___title',
  FeaturedMediaCommentStatus = 'featured_media___comment_status',
  FeaturedMediaPingStatus = 'featured_media___ping_status',
  FeaturedMediaTemplate = 'featured_media___template',
  FeaturedMediaDescription = 'featured_media___description',
  FeaturedMediaCaption = 'featured_media___caption',
  FeaturedMediaAltText = 'featured_media___alt_text',
  FeaturedMediaMediaType = 'featured_media___media_type',
  FeaturedMediaMimeType = 'featured_media___mime_type',
  FeaturedMediaMediaDetailsWidth = 'featured_media___media_details___width',
  FeaturedMediaMediaDetailsHeight = 'featured_media___media_details___height',
  FeaturedMediaMediaDetailsFile = 'featured_media___media_details___file',
  FeaturedMediaMediaDetailsImageMetaAperture = 'featured_media___media_details___image_meta___aperture',
  FeaturedMediaMediaDetailsImageMetaCredit = 'featured_media___media_details___image_meta___credit',
  FeaturedMediaMediaDetailsImageMetaCamera = 'featured_media___media_details___image_meta___camera',
  FeaturedMediaMediaDetailsImageMetaCaption = 'featured_media___media_details___image_meta___caption',
  FeaturedMediaMediaDetailsImageMetaCreatedTimestamp = 'featured_media___media_details___image_meta___created_timestamp',
  FeaturedMediaMediaDetailsImageMetaCopyright = 'featured_media___media_details___image_meta___copyright',
  FeaturedMediaMediaDetailsImageMetaFocalLength = 'featured_media___media_details___image_meta___focal_length',
  FeaturedMediaMediaDetailsImageMetaIso = 'featured_media___media_details___image_meta___iso',
  FeaturedMediaMediaDetailsImageMetaShutterSpeed = 'featured_media___media_details___image_meta___shutter_speed',
  FeaturedMediaMediaDetailsImageMetaTitle = 'featured_media___media_details___image_meta___title',
  FeaturedMediaMediaDetailsImageMetaOrientation = 'featured_media___media_details___image_meta___orientation',
  FeaturedMediaMediaDetailsOriginalImage = 'featured_media___media_details___original_image',
  FeaturedMediaSourceUrl = 'featured_media___source_url',
  FeaturedMediaLinksSelf = 'featured_media____links___self',
  FeaturedMediaLinksSelfHref = 'featured_media____links___self___href',
  FeaturedMediaLinksCollection = 'featured_media____links___collection',
  FeaturedMediaLinksCollectionHref = 'featured_media____links___collection___href',
  FeaturedMediaLinksAbout = 'featured_media____links___about',
  FeaturedMediaLinksAboutHref = 'featured_media____links___about___href',
  FeaturedMediaLinksAuthor = 'featured_media____links___author',
  FeaturedMediaLinksAuthorEmbeddable = 'featured_media____links___author___embeddable',
  FeaturedMediaLinksAuthorHref = 'featured_media____links___author___href',
  FeaturedMediaLinksReplies = 'featured_media____links___replies',
  FeaturedMediaLinksRepliesEmbeddable = 'featured_media____links___replies___embeddable',
  FeaturedMediaLinksRepliesHref = 'featured_media____links___replies___href',
  FeaturedMediaAuthorId = 'featured_media___author___id',
  FeaturedMediaAuthorParentId = 'featured_media___author___parent___id',
  FeaturedMediaAuthorParentChildren = 'featured_media___author___parent___children',
  FeaturedMediaAuthorChildren = 'featured_media___author___children',
  FeaturedMediaAuthorChildrenId = 'featured_media___author___children___id',
  FeaturedMediaAuthorChildrenChildren = 'featured_media___author___children___children',
  FeaturedMediaAuthorInternalContent = 'featured_media___author___internal___content',
  FeaturedMediaAuthorInternalContentDigest = 'featured_media___author___internal___contentDigest',
  FeaturedMediaAuthorInternalDescription = 'featured_media___author___internal___description',
  FeaturedMediaAuthorInternalFieldOwners = 'featured_media___author___internal___fieldOwners',
  FeaturedMediaAuthorInternalIgnoreType = 'featured_media___author___internal___ignoreType',
  FeaturedMediaAuthorInternalMediaType = 'featured_media___author___internal___mediaType',
  FeaturedMediaAuthorInternalOwner = 'featured_media___author___internal___owner',
  FeaturedMediaAuthorInternalType = 'featured_media___author___internal___type',
  FeaturedMediaAuthorWordpressId = 'featured_media___author___wordpress_id',
  FeaturedMediaAuthorName = 'featured_media___author___name',
  FeaturedMediaAuthorUrl = 'featured_media___author___url',
  FeaturedMediaAuthorDescription = 'featured_media___author___description',
  FeaturedMediaAuthorLink = 'featured_media___author___link',
  FeaturedMediaAuthorSlug = 'featured_media___author___slug',
  FeaturedMediaAuthorAvatarUrlsWordpress_24 = 'featured_media___author___avatar_urls___wordpress_24',
  FeaturedMediaAuthorAvatarUrlsWordpress_48 = 'featured_media___author___avatar_urls___wordpress_48',
  FeaturedMediaAuthorAvatarUrlsWordpress_96 = 'featured_media___author___avatar_urls___wordpress_96',
  FeaturedMediaAuthorLinksSelf = 'featured_media___author____links___self',
  FeaturedMediaAuthorLinksCollection = 'featured_media___author____links___collection',
  FeaturedMediaAuthorAuthoredWordpressPage = 'featured_media___author___authored_wordpress__PAGE',
  FeaturedMediaAuthorAuthoredWordpressPageId = 'featured_media___author___authored_wordpress__PAGE___id',
  FeaturedMediaAuthorAuthoredWordpressPageChildren = 'featured_media___author___authored_wordpress__PAGE___children',
  FeaturedMediaAuthorAuthoredWordpressPageWordpressId = 'featured_media___author___authored_wordpress__PAGE___wordpress_id',
  FeaturedMediaAuthorAuthoredWordpressPageDate = 'featured_media___author___authored_wordpress__PAGE___date',
  FeaturedMediaAuthorAuthoredWordpressPageGuid = 'featured_media___author___authored_wordpress__PAGE___guid',
  FeaturedMediaAuthorAuthoredWordpressPageModified = 'featured_media___author___authored_wordpress__PAGE___modified',
  FeaturedMediaAuthorAuthoredWordpressPageSlug = 'featured_media___author___authored_wordpress__PAGE___slug',
  FeaturedMediaAuthorAuthoredWordpressPageStatus = 'featured_media___author___authored_wordpress__PAGE___status',
  FeaturedMediaAuthorAuthoredWordpressPageType = 'featured_media___author___authored_wordpress__PAGE___type',
  FeaturedMediaAuthorAuthoredWordpressPageLink = 'featured_media___author___authored_wordpress__PAGE___link',
  FeaturedMediaAuthorAuthoredWordpressPageTitle = 'featured_media___author___authored_wordpress__PAGE___title',
  FeaturedMediaAuthorAuthoredWordpressPageContent = 'featured_media___author___authored_wordpress__PAGE___content',
  FeaturedMediaAuthorAuthoredWordpressPageExcerpt = 'featured_media___author___authored_wordpress__PAGE___excerpt',
  FeaturedMediaAuthorAuthoredWordpressPageWordpressParent = 'featured_media___author___authored_wordpress__PAGE___wordpress_parent',
  FeaturedMediaAuthorAuthoredWordpressPageMenuOrder = 'featured_media___author___authored_wordpress__PAGE___menu_order',
  FeaturedMediaAuthorAuthoredWordpressPageCommentStatus = 'featured_media___author___authored_wordpress__PAGE___comment_status',
  FeaturedMediaAuthorAuthoredWordpressPagePingStatus = 'featured_media___author___authored_wordpress__PAGE___ping_status',
  FeaturedMediaAuthorAuthoredWordpressPageTemplate = 'featured_media___author___authored_wordpress__PAGE___template',
  FeaturedMediaAuthorAuthoredWordpressPagePath = 'featured_media___author___authored_wordpress__PAGE___path',
  FeaturedMediaAuthorAuthoredWordpressWpMedia = 'featured_media___author___authored_wordpress__wp_media',
  FeaturedMediaAuthorAuthoredWordpressWpMediaId = 'featured_media___author___authored_wordpress__wp_media___id',
  FeaturedMediaAuthorAuthoredWordpressWpMediaChildren = 'featured_media___author___authored_wordpress__wp_media___children',
  FeaturedMediaAuthorAuthoredWordpressWpMediaWordpressId = 'featured_media___author___authored_wordpress__wp_media___wordpress_id',
  FeaturedMediaAuthorAuthoredWordpressWpMediaDate = 'featured_media___author___authored_wordpress__wp_media___date',
  FeaturedMediaAuthorAuthoredWordpressWpMediaModified = 'featured_media___author___authored_wordpress__wp_media___modified',
  FeaturedMediaAuthorAuthoredWordpressWpMediaSlug = 'featured_media___author___authored_wordpress__wp_media___slug',
  FeaturedMediaAuthorAuthoredWordpressWpMediaStatus = 'featured_media___author___authored_wordpress__wp_media___status',
  FeaturedMediaAuthorAuthoredWordpressWpMediaType = 'featured_media___author___authored_wordpress__wp_media___type',
  FeaturedMediaAuthorAuthoredWordpressWpMediaLink = 'featured_media___author___authored_wordpress__wp_media___link',
  FeaturedMediaAuthorAuthoredWordpressWpMediaTitle = 'featured_media___author___authored_wordpress__wp_media___title',
  FeaturedMediaAuthorAuthoredWordpressWpMediaCommentStatus = 'featured_media___author___authored_wordpress__wp_media___comment_status',
  FeaturedMediaAuthorAuthoredWordpressWpMediaPingStatus = 'featured_media___author___authored_wordpress__wp_media___ping_status',
  FeaturedMediaAuthorAuthoredWordpressWpMediaTemplate = 'featured_media___author___authored_wordpress__wp_media___template',
  FeaturedMediaAuthorAuthoredWordpressWpMediaDescription = 'featured_media___author___authored_wordpress__wp_media___description',
  FeaturedMediaAuthorAuthoredWordpressWpMediaCaption = 'featured_media___author___authored_wordpress__wp_media___caption',
  FeaturedMediaAuthorAuthoredWordpressWpMediaAltText = 'featured_media___author___authored_wordpress__wp_media___alt_text',
  FeaturedMediaAuthorAuthoredWordpressWpMediaMediaType = 'featured_media___author___authored_wordpress__wp_media___media_type',
  FeaturedMediaAuthorAuthoredWordpressWpMediaMimeType = 'featured_media___author___authored_wordpress__wp_media___mime_type',
  FeaturedMediaAuthorAuthoredWordpressWpMediaSourceUrl = 'featured_media___author___authored_wordpress__wp_media___source_url',
  FeaturedMediaAuthorAuthoredWordpressWpMediaPath = 'featured_media___author___authored_wordpress__wp_media___path',
  FeaturedMediaAuthorPath = 'featured_media___author___path',
  FeaturedMediaAuthorAuthoredWordpressPost = 'featured_media___author___authored_wordpress__POST',
  FeaturedMediaAuthorAuthoredWordpressPostId = 'featured_media___author___authored_wordpress__POST___id',
  FeaturedMediaAuthorAuthoredWordpressPostChildren = 'featured_media___author___authored_wordpress__POST___children',
  FeaturedMediaAuthorAuthoredWordpressPostWordpressId = 'featured_media___author___authored_wordpress__POST___wordpress_id',
  FeaturedMediaAuthorAuthoredWordpressPostDate = 'featured_media___author___authored_wordpress__POST___date',
  FeaturedMediaAuthorAuthoredWordpressPostGuid = 'featured_media___author___authored_wordpress__POST___guid',
  FeaturedMediaAuthorAuthoredWordpressPostModified = 'featured_media___author___authored_wordpress__POST___modified',
  FeaturedMediaAuthorAuthoredWordpressPostSlug = 'featured_media___author___authored_wordpress__POST___slug',
  FeaturedMediaAuthorAuthoredWordpressPostStatus = 'featured_media___author___authored_wordpress__POST___status',
  FeaturedMediaAuthorAuthoredWordpressPostType = 'featured_media___author___authored_wordpress__POST___type',
  FeaturedMediaAuthorAuthoredWordpressPostLink = 'featured_media___author___authored_wordpress__POST___link',
  FeaturedMediaAuthorAuthoredWordpressPostTitle = 'featured_media___author___authored_wordpress__POST___title',
  FeaturedMediaAuthorAuthoredWordpressPostContent = 'featured_media___author___authored_wordpress__POST___content',
  FeaturedMediaAuthorAuthoredWordpressPostExcerpt = 'featured_media___author___authored_wordpress__POST___excerpt',
  FeaturedMediaAuthorAuthoredWordpressPostCommentStatus = 'featured_media___author___authored_wordpress__POST___comment_status',
  FeaturedMediaAuthorAuthoredWordpressPostPingStatus = 'featured_media___author___authored_wordpress__POST___ping_status',
  FeaturedMediaAuthorAuthoredWordpressPostSticky = 'featured_media___author___authored_wordpress__POST___sticky',
  FeaturedMediaAuthorAuthoredWordpressPostTemplate = 'featured_media___author___authored_wordpress__POST___template',
  FeaturedMediaAuthorAuthoredWordpressPostFormat = 'featured_media___author___authored_wordpress__POST___format',
  FeaturedMediaAuthorAuthoredWordpressPostCategories = 'featured_media___author___authored_wordpress__POST___categories',
  FeaturedMediaAuthorAuthoredWordpressPostPath = 'featured_media___author___authored_wordpress__POST___path',
  FeaturedMediaAuthorAuthoredWordpressPostTags = 'featured_media___author___authored_wordpress__POST___tags',
  FeaturedMediaGuidId = 'featured_media___guid___id',
  FeaturedMediaGuidParentId = 'featured_media___guid___parent___id',
  FeaturedMediaGuidParentChildren = 'featured_media___guid___parent___children',
  FeaturedMediaGuidChildren = 'featured_media___guid___children',
  FeaturedMediaGuidChildrenId = 'featured_media___guid___children___id',
  FeaturedMediaGuidChildrenChildren = 'featured_media___guid___children___children',
  FeaturedMediaGuidInternalContent = 'featured_media___guid___internal___content',
  FeaturedMediaGuidInternalContentDigest = 'featured_media___guid___internal___contentDigest',
  FeaturedMediaGuidInternalDescription = 'featured_media___guid___internal___description',
  FeaturedMediaGuidInternalFieldOwners = 'featured_media___guid___internal___fieldOwners',
  FeaturedMediaGuidInternalIgnoreType = 'featured_media___guid___internal___ignoreType',
  FeaturedMediaGuidInternalMediaType = 'featured_media___guid___internal___mediaType',
  FeaturedMediaGuidInternalOwner = 'featured_media___guid___internal___owner',
  FeaturedMediaGuidInternalType = 'featured_media___guid___internal___type',
  FeaturedMediaGuidWordpressId = 'featured_media___guid___wordpress_id',
  FeaturedMediaGuidDate = 'featured_media___guid___date',
  FeaturedMediaGuidModified = 'featured_media___guid___modified',
  FeaturedMediaGuidSlug = 'featured_media___guid___slug',
  FeaturedMediaGuidStatus = 'featured_media___guid___status',
  FeaturedMediaGuidType = 'featured_media___guid___type',
  FeaturedMediaGuidLink = 'featured_media___guid___link',
  FeaturedMediaGuidTitle = 'featured_media___guid___title',
  FeaturedMediaGuidCommentStatus = 'featured_media___guid___comment_status',
  FeaturedMediaGuidPingStatus = 'featured_media___guid___ping_status',
  FeaturedMediaGuidTemplate = 'featured_media___guid___template',
  FeaturedMediaGuidDescription = 'featured_media___guid___description',
  FeaturedMediaGuidCaption = 'featured_media___guid___caption',
  FeaturedMediaGuidAltText = 'featured_media___guid___alt_text',
  FeaturedMediaGuidMediaType = 'featured_media___guid___media_type',
  FeaturedMediaGuidMimeType = 'featured_media___guid___mime_type',
  FeaturedMediaGuidMediaDetailsWidth = 'featured_media___guid___media_details___width',
  FeaturedMediaGuidMediaDetailsHeight = 'featured_media___guid___media_details___height',
  FeaturedMediaGuidMediaDetailsFile = 'featured_media___guid___media_details___file',
  FeaturedMediaGuidMediaDetailsOriginalImage = 'featured_media___guid___media_details___original_image',
  FeaturedMediaGuidSourceUrl = 'featured_media___guid___source_url',
  FeaturedMediaGuidLinksSelf = 'featured_media___guid____links___self',
  FeaturedMediaGuidLinksCollection = 'featured_media___guid____links___collection',
  FeaturedMediaGuidLinksAbout = 'featured_media___guid____links___about',
  FeaturedMediaGuidLinksAuthor = 'featured_media___guid____links___author',
  FeaturedMediaGuidLinksReplies = 'featured_media___guid____links___replies',
  FeaturedMediaGuidAuthorId = 'featured_media___guid___author___id',
  FeaturedMediaGuidAuthorChildren = 'featured_media___guid___author___children',
  FeaturedMediaGuidAuthorWordpressId = 'featured_media___guid___author___wordpress_id',
  FeaturedMediaGuidAuthorName = 'featured_media___guid___author___name',
  FeaturedMediaGuidAuthorUrl = 'featured_media___guid___author___url',
  FeaturedMediaGuidAuthorDescription = 'featured_media___guid___author___description',
  FeaturedMediaGuidAuthorLink = 'featured_media___guid___author___link',
  FeaturedMediaGuidAuthorSlug = 'featured_media___guid___author___slug',
  FeaturedMediaGuidAuthorAuthoredWordpressPage = 'featured_media___guid___author___authored_wordpress__PAGE',
  FeaturedMediaGuidAuthorAuthoredWordpressWpMedia = 'featured_media___guid___author___authored_wordpress__wp_media',
  FeaturedMediaGuidAuthorPath = 'featured_media___guid___author___path',
  FeaturedMediaGuidAuthorAuthoredWordpressPost = 'featured_media___guid___author___authored_wordpress__POST',
  FeaturedMediaGuidGuidId = 'featured_media___guid___guid___id',
  FeaturedMediaGuidGuidChildren = 'featured_media___guid___guid___children',
  FeaturedMediaGuidGuidWordpressId = 'featured_media___guid___guid___wordpress_id',
  FeaturedMediaGuidGuidDate = 'featured_media___guid___guid___date',
  FeaturedMediaGuidGuidModified = 'featured_media___guid___guid___modified',
  FeaturedMediaGuidGuidSlug = 'featured_media___guid___guid___slug',
  FeaturedMediaGuidGuidStatus = 'featured_media___guid___guid___status',
  FeaturedMediaGuidGuidType = 'featured_media___guid___guid___type',
  FeaturedMediaGuidGuidLink = 'featured_media___guid___guid___link',
  FeaturedMediaGuidGuidTitle = 'featured_media___guid___guid___title',
  FeaturedMediaGuidGuidCommentStatus = 'featured_media___guid___guid___comment_status',
  FeaturedMediaGuidGuidPingStatus = 'featured_media___guid___guid___ping_status',
  FeaturedMediaGuidGuidTemplate = 'featured_media___guid___guid___template',
  FeaturedMediaGuidGuidDescription = 'featured_media___guid___guid___description',
  FeaturedMediaGuidGuidCaption = 'featured_media___guid___guid___caption',
  FeaturedMediaGuidGuidAltText = 'featured_media___guid___guid___alt_text',
  FeaturedMediaGuidGuidMediaType = 'featured_media___guid___guid___media_type',
  FeaturedMediaGuidGuidMimeType = 'featured_media___guid___guid___mime_type',
  FeaturedMediaGuidGuidSourceUrl = 'featured_media___guid___guid___source_url',
  FeaturedMediaGuidGuidPath = 'featured_media___guid___guid___path',
  FeaturedMediaGuidLocalFileSourceInstanceName = 'featured_media___guid___localFile___sourceInstanceName',
  FeaturedMediaGuidLocalFileAbsolutePath = 'featured_media___guid___localFile___absolutePath',
  FeaturedMediaGuidLocalFileRelativePath = 'featured_media___guid___localFile___relativePath',
  FeaturedMediaGuidLocalFileExtension = 'featured_media___guid___localFile___extension',
  FeaturedMediaGuidLocalFileSize = 'featured_media___guid___localFile___size',
  FeaturedMediaGuidLocalFilePrettySize = 'featured_media___guid___localFile___prettySize',
  FeaturedMediaGuidLocalFileModifiedTime = 'featured_media___guid___localFile___modifiedTime',
  FeaturedMediaGuidLocalFileAccessTime = 'featured_media___guid___localFile___accessTime',
  FeaturedMediaGuidLocalFileChangeTime = 'featured_media___guid___localFile___changeTime',
  FeaturedMediaGuidLocalFileBirthTime = 'featured_media___guid___localFile___birthTime',
  FeaturedMediaGuidLocalFileRoot = 'featured_media___guid___localFile___root',
  FeaturedMediaGuidLocalFileDir = 'featured_media___guid___localFile___dir',
  FeaturedMediaGuidLocalFileBase = 'featured_media___guid___localFile___base',
  FeaturedMediaGuidLocalFileExt = 'featured_media___guid___localFile___ext',
  FeaturedMediaGuidLocalFileName = 'featured_media___guid___localFile___name',
  FeaturedMediaGuidLocalFileRelativeDirectory = 'featured_media___guid___localFile___relativeDirectory',
  FeaturedMediaGuidLocalFileDev = 'featured_media___guid___localFile___dev',
  FeaturedMediaGuidLocalFileMode = 'featured_media___guid___localFile___mode',
  FeaturedMediaGuidLocalFileNlink = 'featured_media___guid___localFile___nlink',
  FeaturedMediaGuidLocalFileUid = 'featured_media___guid___localFile___uid',
  FeaturedMediaGuidLocalFileGid = 'featured_media___guid___localFile___gid',
  FeaturedMediaGuidLocalFileRdev = 'featured_media___guid___localFile___rdev',
  FeaturedMediaGuidLocalFileIno = 'featured_media___guid___localFile___ino',
  FeaturedMediaGuidLocalFileAtimeMs = 'featured_media___guid___localFile___atimeMs',
  FeaturedMediaGuidLocalFileMtimeMs = 'featured_media___guid___localFile___mtimeMs',
  FeaturedMediaGuidLocalFileCtimeMs = 'featured_media___guid___localFile___ctimeMs',
  FeaturedMediaGuidLocalFileAtime = 'featured_media___guid___localFile___atime',
  FeaturedMediaGuidLocalFileMtime = 'featured_media___guid___localFile___mtime',
  FeaturedMediaGuidLocalFileCtime = 'featured_media___guid___localFile___ctime',
  FeaturedMediaGuidLocalFileBirthtime = 'featured_media___guid___localFile___birthtime',
  FeaturedMediaGuidLocalFileBirthtimeMs = 'featured_media___guid___localFile___birthtimeMs',
  FeaturedMediaGuidLocalFileBlksize = 'featured_media___guid___localFile___blksize',
  FeaturedMediaGuidLocalFileBlocks = 'featured_media___guid___localFile___blocks',
  FeaturedMediaGuidLocalFileUrl = 'featured_media___guid___localFile___url',
  FeaturedMediaGuidLocalFileId = 'featured_media___guid___localFile___id',
  FeaturedMediaGuidLocalFileChildren = 'featured_media___guid___localFile___children',
  FeaturedMediaGuidPath = 'featured_media___guid___path',
  FeaturedMediaLocalFileSourceInstanceName = 'featured_media___localFile___sourceInstanceName',
  FeaturedMediaLocalFileAbsolutePath = 'featured_media___localFile___absolutePath',
  FeaturedMediaLocalFileRelativePath = 'featured_media___localFile___relativePath',
  FeaturedMediaLocalFileExtension = 'featured_media___localFile___extension',
  FeaturedMediaLocalFileSize = 'featured_media___localFile___size',
  FeaturedMediaLocalFilePrettySize = 'featured_media___localFile___prettySize',
  FeaturedMediaLocalFileModifiedTime = 'featured_media___localFile___modifiedTime',
  FeaturedMediaLocalFileAccessTime = 'featured_media___localFile___accessTime',
  FeaturedMediaLocalFileChangeTime = 'featured_media___localFile___changeTime',
  FeaturedMediaLocalFileBirthTime = 'featured_media___localFile___birthTime',
  FeaturedMediaLocalFileRoot = 'featured_media___localFile___root',
  FeaturedMediaLocalFileDir = 'featured_media___localFile___dir',
  FeaturedMediaLocalFileBase = 'featured_media___localFile___base',
  FeaturedMediaLocalFileExt = 'featured_media___localFile___ext',
  FeaturedMediaLocalFileName = 'featured_media___localFile___name',
  FeaturedMediaLocalFileRelativeDirectory = 'featured_media___localFile___relativeDirectory',
  FeaturedMediaLocalFileDev = 'featured_media___localFile___dev',
  FeaturedMediaLocalFileMode = 'featured_media___localFile___mode',
  FeaturedMediaLocalFileNlink = 'featured_media___localFile___nlink',
  FeaturedMediaLocalFileUid = 'featured_media___localFile___uid',
  FeaturedMediaLocalFileGid = 'featured_media___localFile___gid',
  FeaturedMediaLocalFileRdev = 'featured_media___localFile___rdev',
  FeaturedMediaLocalFileIno = 'featured_media___localFile___ino',
  FeaturedMediaLocalFileAtimeMs = 'featured_media___localFile___atimeMs',
  FeaturedMediaLocalFileMtimeMs = 'featured_media___localFile___mtimeMs',
  FeaturedMediaLocalFileCtimeMs = 'featured_media___localFile___ctimeMs',
  FeaturedMediaLocalFileAtime = 'featured_media___localFile___atime',
  FeaturedMediaLocalFileMtime = 'featured_media___localFile___mtime',
  FeaturedMediaLocalFileCtime = 'featured_media___localFile___ctime',
  FeaturedMediaLocalFileBirthtime = 'featured_media___localFile___birthtime',
  FeaturedMediaLocalFileBirthtimeMs = 'featured_media___localFile___birthtimeMs',
  FeaturedMediaLocalFileBlksize = 'featured_media___localFile___blksize',
  FeaturedMediaLocalFileBlocks = 'featured_media___localFile___blocks',
  FeaturedMediaLocalFileUrl = 'featured_media___localFile___url',
  FeaturedMediaLocalFileChildImageSharpId = 'featured_media___localFile___childImageSharp___id',
  FeaturedMediaLocalFileChildImageSharpChildren = 'featured_media___localFile___childImageSharp___children',
  FeaturedMediaLocalFileId = 'featured_media___localFile___id',
  FeaturedMediaLocalFileParentId = 'featured_media___localFile___parent___id',
  FeaturedMediaLocalFileParentChildren = 'featured_media___localFile___parent___children',
  FeaturedMediaLocalFileChildren = 'featured_media___localFile___children',
  FeaturedMediaLocalFileChildrenId = 'featured_media___localFile___children___id',
  FeaturedMediaLocalFileChildrenChildren = 'featured_media___localFile___children___children',
  FeaturedMediaLocalFileInternalContent = 'featured_media___localFile___internal___content',
  FeaturedMediaLocalFileInternalContentDigest = 'featured_media___localFile___internal___contentDigest',
  FeaturedMediaLocalFileInternalDescription = 'featured_media___localFile___internal___description',
  FeaturedMediaLocalFileInternalFieldOwners = 'featured_media___localFile___internal___fieldOwners',
  FeaturedMediaLocalFileInternalIgnoreType = 'featured_media___localFile___internal___ignoreType',
  FeaturedMediaLocalFileInternalMediaType = 'featured_media___localFile___internal___mediaType',
  FeaturedMediaLocalFileInternalOwner = 'featured_media___localFile___internal___owner',
  FeaturedMediaLocalFileInternalType = 'featured_media___localFile___internal___type',
  FeaturedMediaPath = 'featured_media___path',
  JetpackFeaturedMediaUrlId = 'jetpack_featured_media_url___id',
  JetpackFeaturedMediaUrlParentId = 'jetpack_featured_media_url___parent___id',
  JetpackFeaturedMediaUrlParentParentId = 'jetpack_featured_media_url___parent___parent___id',
  JetpackFeaturedMediaUrlParentParentChildren = 'jetpack_featured_media_url___parent___parent___children',
  JetpackFeaturedMediaUrlParentChildren = 'jetpack_featured_media_url___parent___children',
  JetpackFeaturedMediaUrlParentChildrenId = 'jetpack_featured_media_url___parent___children___id',
  JetpackFeaturedMediaUrlParentChildrenChildren = 'jetpack_featured_media_url___parent___children___children',
  JetpackFeaturedMediaUrlParentInternalContent = 'jetpack_featured_media_url___parent___internal___content',
  JetpackFeaturedMediaUrlParentInternalContentDigest = 'jetpack_featured_media_url___parent___internal___contentDigest',
  JetpackFeaturedMediaUrlParentInternalDescription = 'jetpack_featured_media_url___parent___internal___description',
  JetpackFeaturedMediaUrlParentInternalFieldOwners = 'jetpack_featured_media_url___parent___internal___fieldOwners',
  JetpackFeaturedMediaUrlParentInternalIgnoreType = 'jetpack_featured_media_url___parent___internal___ignoreType',
  JetpackFeaturedMediaUrlParentInternalMediaType = 'jetpack_featured_media_url___parent___internal___mediaType',
  JetpackFeaturedMediaUrlParentInternalOwner = 'jetpack_featured_media_url___parent___internal___owner',
  JetpackFeaturedMediaUrlParentInternalType = 'jetpack_featured_media_url___parent___internal___type',
  JetpackFeaturedMediaUrlChildren = 'jetpack_featured_media_url___children',
  JetpackFeaturedMediaUrlChildrenId = 'jetpack_featured_media_url___children___id',
  JetpackFeaturedMediaUrlChildrenParentId = 'jetpack_featured_media_url___children___parent___id',
  JetpackFeaturedMediaUrlChildrenParentChildren = 'jetpack_featured_media_url___children___parent___children',
  JetpackFeaturedMediaUrlChildrenChildren = 'jetpack_featured_media_url___children___children',
  JetpackFeaturedMediaUrlChildrenChildrenId = 'jetpack_featured_media_url___children___children___id',
  JetpackFeaturedMediaUrlChildrenChildrenChildren = 'jetpack_featured_media_url___children___children___children',
  JetpackFeaturedMediaUrlChildrenInternalContent = 'jetpack_featured_media_url___children___internal___content',
  JetpackFeaturedMediaUrlChildrenInternalContentDigest = 'jetpack_featured_media_url___children___internal___contentDigest',
  JetpackFeaturedMediaUrlChildrenInternalDescription = 'jetpack_featured_media_url___children___internal___description',
  JetpackFeaturedMediaUrlChildrenInternalFieldOwners = 'jetpack_featured_media_url___children___internal___fieldOwners',
  JetpackFeaturedMediaUrlChildrenInternalIgnoreType = 'jetpack_featured_media_url___children___internal___ignoreType',
  JetpackFeaturedMediaUrlChildrenInternalMediaType = 'jetpack_featured_media_url___children___internal___mediaType',
  JetpackFeaturedMediaUrlChildrenInternalOwner = 'jetpack_featured_media_url___children___internal___owner',
  JetpackFeaturedMediaUrlChildrenInternalType = 'jetpack_featured_media_url___children___internal___type',
  JetpackFeaturedMediaUrlInternalContent = 'jetpack_featured_media_url___internal___content',
  JetpackFeaturedMediaUrlInternalContentDigest = 'jetpack_featured_media_url___internal___contentDigest',
  JetpackFeaturedMediaUrlInternalDescription = 'jetpack_featured_media_url___internal___description',
  JetpackFeaturedMediaUrlInternalFieldOwners = 'jetpack_featured_media_url___internal___fieldOwners',
  JetpackFeaturedMediaUrlInternalIgnoreType = 'jetpack_featured_media_url___internal___ignoreType',
  JetpackFeaturedMediaUrlInternalMediaType = 'jetpack_featured_media_url___internal___mediaType',
  JetpackFeaturedMediaUrlInternalOwner = 'jetpack_featured_media_url___internal___owner',
  JetpackFeaturedMediaUrlInternalType = 'jetpack_featured_media_url___internal___type',
  JetpackFeaturedMediaUrlWordpressId = 'jetpack_featured_media_url___wordpress_id',
  JetpackFeaturedMediaUrlDate = 'jetpack_featured_media_url___date',
  JetpackFeaturedMediaUrlModified = 'jetpack_featured_media_url___modified',
  JetpackFeaturedMediaUrlSlug = 'jetpack_featured_media_url___slug',
  JetpackFeaturedMediaUrlStatus = 'jetpack_featured_media_url___status',
  JetpackFeaturedMediaUrlType = 'jetpack_featured_media_url___type',
  JetpackFeaturedMediaUrlLink = 'jetpack_featured_media_url___link',
  JetpackFeaturedMediaUrlTitle = 'jetpack_featured_media_url___title',
  JetpackFeaturedMediaUrlCommentStatus = 'jetpack_featured_media_url___comment_status',
  JetpackFeaturedMediaUrlPingStatus = 'jetpack_featured_media_url___ping_status',
  JetpackFeaturedMediaUrlTemplate = 'jetpack_featured_media_url___template',
  JetpackFeaturedMediaUrlDescription = 'jetpack_featured_media_url___description',
  JetpackFeaturedMediaUrlCaption = 'jetpack_featured_media_url___caption',
  JetpackFeaturedMediaUrlAltText = 'jetpack_featured_media_url___alt_text',
  JetpackFeaturedMediaUrlMediaType = 'jetpack_featured_media_url___media_type',
  JetpackFeaturedMediaUrlMimeType = 'jetpack_featured_media_url___mime_type',
  JetpackFeaturedMediaUrlMediaDetailsWidth = 'jetpack_featured_media_url___media_details___width',
  JetpackFeaturedMediaUrlMediaDetailsHeight = 'jetpack_featured_media_url___media_details___height',
  JetpackFeaturedMediaUrlMediaDetailsFile = 'jetpack_featured_media_url___media_details___file',
  JetpackFeaturedMediaUrlMediaDetailsImageMetaAperture = 'jetpack_featured_media_url___media_details___image_meta___aperture',
  JetpackFeaturedMediaUrlMediaDetailsImageMetaCredit = 'jetpack_featured_media_url___media_details___image_meta___credit',
  JetpackFeaturedMediaUrlMediaDetailsImageMetaCamera = 'jetpack_featured_media_url___media_details___image_meta___camera',
  JetpackFeaturedMediaUrlMediaDetailsImageMetaCaption = 'jetpack_featured_media_url___media_details___image_meta___caption',
  JetpackFeaturedMediaUrlMediaDetailsImageMetaCreatedTimestamp = 'jetpack_featured_media_url___media_details___image_meta___created_timestamp',
  JetpackFeaturedMediaUrlMediaDetailsImageMetaCopyright = 'jetpack_featured_media_url___media_details___image_meta___copyright',
  JetpackFeaturedMediaUrlMediaDetailsImageMetaFocalLength = 'jetpack_featured_media_url___media_details___image_meta___focal_length',
  JetpackFeaturedMediaUrlMediaDetailsImageMetaIso = 'jetpack_featured_media_url___media_details___image_meta___iso',
  JetpackFeaturedMediaUrlMediaDetailsImageMetaShutterSpeed = 'jetpack_featured_media_url___media_details___image_meta___shutter_speed',
  JetpackFeaturedMediaUrlMediaDetailsImageMetaTitle = 'jetpack_featured_media_url___media_details___image_meta___title',
  JetpackFeaturedMediaUrlMediaDetailsImageMetaOrientation = 'jetpack_featured_media_url___media_details___image_meta___orientation',
  JetpackFeaturedMediaUrlMediaDetailsOriginalImage = 'jetpack_featured_media_url___media_details___original_image',
  JetpackFeaturedMediaUrlSourceUrl = 'jetpack_featured_media_url___source_url',
  JetpackFeaturedMediaUrlLinksSelf = 'jetpack_featured_media_url____links___self',
  JetpackFeaturedMediaUrlLinksSelfHref = 'jetpack_featured_media_url____links___self___href',
  JetpackFeaturedMediaUrlLinksCollection = 'jetpack_featured_media_url____links___collection',
  JetpackFeaturedMediaUrlLinksCollectionHref = 'jetpack_featured_media_url____links___collection___href',
  JetpackFeaturedMediaUrlLinksAbout = 'jetpack_featured_media_url____links___about',
  JetpackFeaturedMediaUrlLinksAboutHref = 'jetpack_featured_media_url____links___about___href',
  JetpackFeaturedMediaUrlLinksAuthor = 'jetpack_featured_media_url____links___author',
  JetpackFeaturedMediaUrlLinksAuthorEmbeddable = 'jetpack_featured_media_url____links___author___embeddable',
  JetpackFeaturedMediaUrlLinksAuthorHref = 'jetpack_featured_media_url____links___author___href',
  JetpackFeaturedMediaUrlLinksReplies = 'jetpack_featured_media_url____links___replies',
  JetpackFeaturedMediaUrlLinksRepliesEmbeddable = 'jetpack_featured_media_url____links___replies___embeddable',
  JetpackFeaturedMediaUrlLinksRepliesHref = 'jetpack_featured_media_url____links___replies___href',
  JetpackFeaturedMediaUrlAuthorId = 'jetpack_featured_media_url___author___id',
  JetpackFeaturedMediaUrlAuthorParentId = 'jetpack_featured_media_url___author___parent___id',
  JetpackFeaturedMediaUrlAuthorParentChildren = 'jetpack_featured_media_url___author___parent___children',
  JetpackFeaturedMediaUrlAuthorChildren = 'jetpack_featured_media_url___author___children',
  JetpackFeaturedMediaUrlAuthorChildrenId = 'jetpack_featured_media_url___author___children___id',
  JetpackFeaturedMediaUrlAuthorChildrenChildren = 'jetpack_featured_media_url___author___children___children',
  JetpackFeaturedMediaUrlAuthorInternalContent = 'jetpack_featured_media_url___author___internal___content',
  JetpackFeaturedMediaUrlAuthorInternalContentDigest = 'jetpack_featured_media_url___author___internal___contentDigest',
  JetpackFeaturedMediaUrlAuthorInternalDescription = 'jetpack_featured_media_url___author___internal___description',
  JetpackFeaturedMediaUrlAuthorInternalFieldOwners = 'jetpack_featured_media_url___author___internal___fieldOwners',
  JetpackFeaturedMediaUrlAuthorInternalIgnoreType = 'jetpack_featured_media_url___author___internal___ignoreType',
  JetpackFeaturedMediaUrlAuthorInternalMediaType = 'jetpack_featured_media_url___author___internal___mediaType',
  JetpackFeaturedMediaUrlAuthorInternalOwner = 'jetpack_featured_media_url___author___internal___owner',
  JetpackFeaturedMediaUrlAuthorInternalType = 'jetpack_featured_media_url___author___internal___type',
  JetpackFeaturedMediaUrlAuthorWordpressId = 'jetpack_featured_media_url___author___wordpress_id',
  JetpackFeaturedMediaUrlAuthorName = 'jetpack_featured_media_url___author___name',
  JetpackFeaturedMediaUrlAuthorUrl = 'jetpack_featured_media_url___author___url',
  JetpackFeaturedMediaUrlAuthorDescription = 'jetpack_featured_media_url___author___description',
  JetpackFeaturedMediaUrlAuthorLink = 'jetpack_featured_media_url___author___link',
  JetpackFeaturedMediaUrlAuthorSlug = 'jetpack_featured_media_url___author___slug',
  JetpackFeaturedMediaUrlAuthorAvatarUrlsWordpress_24 = 'jetpack_featured_media_url___author___avatar_urls___wordpress_24',
  JetpackFeaturedMediaUrlAuthorAvatarUrlsWordpress_48 = 'jetpack_featured_media_url___author___avatar_urls___wordpress_48',
  JetpackFeaturedMediaUrlAuthorAvatarUrlsWordpress_96 = 'jetpack_featured_media_url___author___avatar_urls___wordpress_96',
  JetpackFeaturedMediaUrlAuthorLinksSelf = 'jetpack_featured_media_url___author____links___self',
  JetpackFeaturedMediaUrlAuthorLinksCollection = 'jetpack_featured_media_url___author____links___collection',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPage = 'jetpack_featured_media_url___author___authored_wordpress__PAGE',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPageId = 'jetpack_featured_media_url___author___authored_wordpress__PAGE___id',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPageChildren = 'jetpack_featured_media_url___author___authored_wordpress__PAGE___children',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPageWordpressId = 'jetpack_featured_media_url___author___authored_wordpress__PAGE___wordpress_id',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPageDate = 'jetpack_featured_media_url___author___authored_wordpress__PAGE___date',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPageGuid = 'jetpack_featured_media_url___author___authored_wordpress__PAGE___guid',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPageModified = 'jetpack_featured_media_url___author___authored_wordpress__PAGE___modified',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPageSlug = 'jetpack_featured_media_url___author___authored_wordpress__PAGE___slug',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPageStatus = 'jetpack_featured_media_url___author___authored_wordpress__PAGE___status',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPageType = 'jetpack_featured_media_url___author___authored_wordpress__PAGE___type',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPageLink = 'jetpack_featured_media_url___author___authored_wordpress__PAGE___link',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPageTitle = 'jetpack_featured_media_url___author___authored_wordpress__PAGE___title',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPageContent = 'jetpack_featured_media_url___author___authored_wordpress__PAGE___content',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPageExcerpt = 'jetpack_featured_media_url___author___authored_wordpress__PAGE___excerpt',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPageWordpressParent = 'jetpack_featured_media_url___author___authored_wordpress__PAGE___wordpress_parent',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPageMenuOrder = 'jetpack_featured_media_url___author___authored_wordpress__PAGE___menu_order',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPageCommentStatus = 'jetpack_featured_media_url___author___authored_wordpress__PAGE___comment_status',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPagePingStatus = 'jetpack_featured_media_url___author___authored_wordpress__PAGE___ping_status',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPageTemplate = 'jetpack_featured_media_url___author___authored_wordpress__PAGE___template',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPagePath = 'jetpack_featured_media_url___author___authored_wordpress__PAGE___path',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressWpMedia = 'jetpack_featured_media_url___author___authored_wordpress__wp_media',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressWpMediaId = 'jetpack_featured_media_url___author___authored_wordpress__wp_media___id',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressWpMediaChildren = 'jetpack_featured_media_url___author___authored_wordpress__wp_media___children',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressWpMediaWordpressId = 'jetpack_featured_media_url___author___authored_wordpress__wp_media___wordpress_id',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressWpMediaDate = 'jetpack_featured_media_url___author___authored_wordpress__wp_media___date',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressWpMediaModified = 'jetpack_featured_media_url___author___authored_wordpress__wp_media___modified',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressWpMediaSlug = 'jetpack_featured_media_url___author___authored_wordpress__wp_media___slug',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressWpMediaStatus = 'jetpack_featured_media_url___author___authored_wordpress__wp_media___status',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressWpMediaType = 'jetpack_featured_media_url___author___authored_wordpress__wp_media___type',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressWpMediaLink = 'jetpack_featured_media_url___author___authored_wordpress__wp_media___link',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressWpMediaTitle = 'jetpack_featured_media_url___author___authored_wordpress__wp_media___title',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressWpMediaCommentStatus = 'jetpack_featured_media_url___author___authored_wordpress__wp_media___comment_status',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressWpMediaPingStatus = 'jetpack_featured_media_url___author___authored_wordpress__wp_media___ping_status',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressWpMediaTemplate = 'jetpack_featured_media_url___author___authored_wordpress__wp_media___template',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressWpMediaDescription = 'jetpack_featured_media_url___author___authored_wordpress__wp_media___description',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressWpMediaCaption = 'jetpack_featured_media_url___author___authored_wordpress__wp_media___caption',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressWpMediaAltText = 'jetpack_featured_media_url___author___authored_wordpress__wp_media___alt_text',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressWpMediaMediaType = 'jetpack_featured_media_url___author___authored_wordpress__wp_media___media_type',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressWpMediaMimeType = 'jetpack_featured_media_url___author___authored_wordpress__wp_media___mime_type',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressWpMediaSourceUrl = 'jetpack_featured_media_url___author___authored_wordpress__wp_media___source_url',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressWpMediaPath = 'jetpack_featured_media_url___author___authored_wordpress__wp_media___path',
  JetpackFeaturedMediaUrlAuthorPath = 'jetpack_featured_media_url___author___path',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPost = 'jetpack_featured_media_url___author___authored_wordpress__POST',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPostId = 'jetpack_featured_media_url___author___authored_wordpress__POST___id',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPostChildren = 'jetpack_featured_media_url___author___authored_wordpress__POST___children',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPostWordpressId = 'jetpack_featured_media_url___author___authored_wordpress__POST___wordpress_id',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPostDate = 'jetpack_featured_media_url___author___authored_wordpress__POST___date',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPostGuid = 'jetpack_featured_media_url___author___authored_wordpress__POST___guid',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPostModified = 'jetpack_featured_media_url___author___authored_wordpress__POST___modified',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPostSlug = 'jetpack_featured_media_url___author___authored_wordpress__POST___slug',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPostStatus = 'jetpack_featured_media_url___author___authored_wordpress__POST___status',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPostType = 'jetpack_featured_media_url___author___authored_wordpress__POST___type',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPostLink = 'jetpack_featured_media_url___author___authored_wordpress__POST___link',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPostTitle = 'jetpack_featured_media_url___author___authored_wordpress__POST___title',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPostContent = 'jetpack_featured_media_url___author___authored_wordpress__POST___content',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPostExcerpt = 'jetpack_featured_media_url___author___authored_wordpress__POST___excerpt',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPostCommentStatus = 'jetpack_featured_media_url___author___authored_wordpress__POST___comment_status',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPostPingStatus = 'jetpack_featured_media_url___author___authored_wordpress__POST___ping_status',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPostSticky = 'jetpack_featured_media_url___author___authored_wordpress__POST___sticky',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPostTemplate = 'jetpack_featured_media_url___author___authored_wordpress__POST___template',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPostFormat = 'jetpack_featured_media_url___author___authored_wordpress__POST___format',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPostCategories = 'jetpack_featured_media_url___author___authored_wordpress__POST___categories',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPostPath = 'jetpack_featured_media_url___author___authored_wordpress__POST___path',
  JetpackFeaturedMediaUrlAuthorAuthoredWordpressPostTags = 'jetpack_featured_media_url___author___authored_wordpress__POST___tags',
  JetpackFeaturedMediaUrlGuidId = 'jetpack_featured_media_url___guid___id',
  JetpackFeaturedMediaUrlGuidParentId = 'jetpack_featured_media_url___guid___parent___id',
  JetpackFeaturedMediaUrlGuidParentChildren = 'jetpack_featured_media_url___guid___parent___children',
  JetpackFeaturedMediaUrlGuidChildren = 'jetpack_featured_media_url___guid___children',
  JetpackFeaturedMediaUrlGuidChildrenId = 'jetpack_featured_media_url___guid___children___id',
  JetpackFeaturedMediaUrlGuidChildrenChildren = 'jetpack_featured_media_url___guid___children___children',
  JetpackFeaturedMediaUrlGuidInternalContent = 'jetpack_featured_media_url___guid___internal___content',
  JetpackFeaturedMediaUrlGuidInternalContentDigest = 'jetpack_featured_media_url___guid___internal___contentDigest',
  JetpackFeaturedMediaUrlGuidInternalDescription = 'jetpack_featured_media_url___guid___internal___description',
  JetpackFeaturedMediaUrlGuidInternalFieldOwners = 'jetpack_featured_media_url___guid___internal___fieldOwners',
  JetpackFeaturedMediaUrlGuidInternalIgnoreType = 'jetpack_featured_media_url___guid___internal___ignoreType',
  JetpackFeaturedMediaUrlGuidInternalMediaType = 'jetpack_featured_media_url___guid___internal___mediaType',
  JetpackFeaturedMediaUrlGuidInternalOwner = 'jetpack_featured_media_url___guid___internal___owner',
  JetpackFeaturedMediaUrlGuidInternalType = 'jetpack_featured_media_url___guid___internal___type',
  JetpackFeaturedMediaUrlGuidWordpressId = 'jetpack_featured_media_url___guid___wordpress_id',
  JetpackFeaturedMediaUrlGuidDate = 'jetpack_featured_media_url___guid___date',
  JetpackFeaturedMediaUrlGuidModified = 'jetpack_featured_media_url___guid___modified',
  JetpackFeaturedMediaUrlGuidSlug = 'jetpack_featured_media_url___guid___slug',
  JetpackFeaturedMediaUrlGuidStatus = 'jetpack_featured_media_url___guid___status',
  JetpackFeaturedMediaUrlGuidType = 'jetpack_featured_media_url___guid___type',
  JetpackFeaturedMediaUrlGuidLink = 'jetpack_featured_media_url___guid___link',
  JetpackFeaturedMediaUrlGuidTitle = 'jetpack_featured_media_url___guid___title',
  JetpackFeaturedMediaUrlGuidCommentStatus = 'jetpack_featured_media_url___guid___comment_status',
  JetpackFeaturedMediaUrlGuidPingStatus = 'jetpack_featured_media_url___guid___ping_status',
  JetpackFeaturedMediaUrlGuidTemplate = 'jetpack_featured_media_url___guid___template',
  JetpackFeaturedMediaUrlGuidDescription = 'jetpack_featured_media_url___guid___description',
  JetpackFeaturedMediaUrlGuidCaption = 'jetpack_featured_media_url___guid___caption',
  JetpackFeaturedMediaUrlGuidAltText = 'jetpack_featured_media_url___guid___alt_text',
  JetpackFeaturedMediaUrlGuidMediaType = 'jetpack_featured_media_url___guid___media_type',
  JetpackFeaturedMediaUrlGuidMimeType = 'jetpack_featured_media_url___guid___mime_type',
  JetpackFeaturedMediaUrlGuidMediaDetailsWidth = 'jetpack_featured_media_url___guid___media_details___width',
  JetpackFeaturedMediaUrlGuidMediaDetailsHeight = 'jetpack_featured_media_url___guid___media_details___height',
  JetpackFeaturedMediaUrlGuidMediaDetailsFile = 'jetpack_featured_media_url___guid___media_details___file',
  JetpackFeaturedMediaUrlGuidMediaDetailsOriginalImage = 'jetpack_featured_media_url___guid___media_details___original_image',
  JetpackFeaturedMediaUrlGuidSourceUrl = 'jetpack_featured_media_url___guid___source_url',
  JetpackFeaturedMediaUrlGuidLinksSelf = 'jetpack_featured_media_url___guid____links___self',
  JetpackFeaturedMediaUrlGuidLinksCollection = 'jetpack_featured_media_url___guid____links___collection',
  JetpackFeaturedMediaUrlGuidLinksAbout = 'jetpack_featured_media_url___guid____links___about',
  JetpackFeaturedMediaUrlGuidLinksAuthor = 'jetpack_featured_media_url___guid____links___author',
  JetpackFeaturedMediaUrlGuidLinksReplies = 'jetpack_featured_media_url___guid____links___replies',
  JetpackFeaturedMediaUrlGuidAuthorId = 'jetpack_featured_media_url___guid___author___id',
  JetpackFeaturedMediaUrlGuidAuthorChildren = 'jetpack_featured_media_url___guid___author___children',
  JetpackFeaturedMediaUrlGuidAuthorWordpressId = 'jetpack_featured_media_url___guid___author___wordpress_id',
  JetpackFeaturedMediaUrlGuidAuthorName = 'jetpack_featured_media_url___guid___author___name',
  JetpackFeaturedMediaUrlGuidAuthorUrl = 'jetpack_featured_media_url___guid___author___url',
  JetpackFeaturedMediaUrlGuidAuthorDescription = 'jetpack_featured_media_url___guid___author___description',
  JetpackFeaturedMediaUrlGuidAuthorLink = 'jetpack_featured_media_url___guid___author___link',
  JetpackFeaturedMediaUrlGuidAuthorSlug = 'jetpack_featured_media_url___guid___author___slug',
  JetpackFeaturedMediaUrlGuidAuthorAuthoredWordpressPage = 'jetpack_featured_media_url___guid___author___authored_wordpress__PAGE',
  JetpackFeaturedMediaUrlGuidAuthorAuthoredWordpressWpMedia = 'jetpack_featured_media_url___guid___author___authored_wordpress__wp_media',
  JetpackFeaturedMediaUrlGuidAuthorPath = 'jetpack_featured_media_url___guid___author___path',
  JetpackFeaturedMediaUrlGuidAuthorAuthoredWordpressPost = 'jetpack_featured_media_url___guid___author___authored_wordpress__POST',
  JetpackFeaturedMediaUrlGuidGuidId = 'jetpack_featured_media_url___guid___guid___id',
  JetpackFeaturedMediaUrlGuidGuidChildren = 'jetpack_featured_media_url___guid___guid___children',
  JetpackFeaturedMediaUrlGuidGuidWordpressId = 'jetpack_featured_media_url___guid___guid___wordpress_id',
  JetpackFeaturedMediaUrlGuidGuidDate = 'jetpack_featured_media_url___guid___guid___date',
  JetpackFeaturedMediaUrlGuidGuidModified = 'jetpack_featured_media_url___guid___guid___modified',
  JetpackFeaturedMediaUrlGuidGuidSlug = 'jetpack_featured_media_url___guid___guid___slug',
  JetpackFeaturedMediaUrlGuidGuidStatus = 'jetpack_featured_media_url___guid___guid___status',
  JetpackFeaturedMediaUrlGuidGuidType = 'jetpack_featured_media_url___guid___guid___type',
  JetpackFeaturedMediaUrlGuidGuidLink = 'jetpack_featured_media_url___guid___guid___link',
  JetpackFeaturedMediaUrlGuidGuidTitle = 'jetpack_featured_media_url___guid___guid___title',
  JetpackFeaturedMediaUrlGuidGuidCommentStatus = 'jetpack_featured_media_url___guid___guid___comment_status',
  JetpackFeaturedMediaUrlGuidGuidPingStatus = 'jetpack_featured_media_url___guid___guid___ping_status',
  JetpackFeaturedMediaUrlGuidGuidTemplate = 'jetpack_featured_media_url___guid___guid___template',
  JetpackFeaturedMediaUrlGuidGuidDescription = 'jetpack_featured_media_url___guid___guid___description',
  JetpackFeaturedMediaUrlGuidGuidCaption = 'jetpack_featured_media_url___guid___guid___caption',
  JetpackFeaturedMediaUrlGuidGuidAltText = 'jetpack_featured_media_url___guid___guid___alt_text',
  JetpackFeaturedMediaUrlGuidGuidMediaType = 'jetpack_featured_media_url___guid___guid___media_type',
  JetpackFeaturedMediaUrlGuidGuidMimeType = 'jetpack_featured_media_url___guid___guid___mime_type',
  JetpackFeaturedMediaUrlGuidGuidSourceUrl = 'jetpack_featured_media_url___guid___guid___source_url',
  JetpackFeaturedMediaUrlGuidGuidPath = 'jetpack_featured_media_url___guid___guid___path',
  JetpackFeaturedMediaUrlGuidLocalFileSourceInstanceName = 'jetpack_featured_media_url___guid___localFile___sourceInstanceName',
  JetpackFeaturedMediaUrlGuidLocalFileAbsolutePath = 'jetpack_featured_media_url___guid___localFile___absolutePath',
  JetpackFeaturedMediaUrlGuidLocalFileRelativePath = 'jetpack_featured_media_url___guid___localFile___relativePath',
  JetpackFeaturedMediaUrlGuidLocalFileExtension = 'jetpack_featured_media_url___guid___localFile___extension',
  JetpackFeaturedMediaUrlGuidLocalFileSize = 'jetpack_featured_media_url___guid___localFile___size',
  JetpackFeaturedMediaUrlGuidLocalFilePrettySize = 'jetpack_featured_media_url___guid___localFile___prettySize',
  JetpackFeaturedMediaUrlGuidLocalFileModifiedTime = 'jetpack_featured_media_url___guid___localFile___modifiedTime',
  JetpackFeaturedMediaUrlGuidLocalFileAccessTime = 'jetpack_featured_media_url___guid___localFile___accessTime',
  JetpackFeaturedMediaUrlGuidLocalFileChangeTime = 'jetpack_featured_media_url___guid___localFile___changeTime',
  JetpackFeaturedMediaUrlGuidLocalFileBirthTime = 'jetpack_featured_media_url___guid___localFile___birthTime',
  JetpackFeaturedMediaUrlGuidLocalFileRoot = 'jetpack_featured_media_url___guid___localFile___root',
  JetpackFeaturedMediaUrlGuidLocalFileDir = 'jetpack_featured_media_url___guid___localFile___dir',
  JetpackFeaturedMediaUrlGuidLocalFileBase = 'jetpack_featured_media_url___guid___localFile___base',
  JetpackFeaturedMediaUrlGuidLocalFileExt = 'jetpack_featured_media_url___guid___localFile___ext',
  JetpackFeaturedMediaUrlGuidLocalFileName = 'jetpack_featured_media_url___guid___localFile___name',
  JetpackFeaturedMediaUrlGuidLocalFileRelativeDirectory = 'jetpack_featured_media_url___guid___localFile___relativeDirectory',
  JetpackFeaturedMediaUrlGuidLocalFileDev = 'jetpack_featured_media_url___guid___localFile___dev',
  JetpackFeaturedMediaUrlGuidLocalFileMode = 'jetpack_featured_media_url___guid___localFile___mode',
  JetpackFeaturedMediaUrlGuidLocalFileNlink = 'jetpack_featured_media_url___guid___localFile___nlink',
  JetpackFeaturedMediaUrlGuidLocalFileUid = 'jetpack_featured_media_url___guid___localFile___uid',
  JetpackFeaturedMediaUrlGuidLocalFileGid = 'jetpack_featured_media_url___guid___localFile___gid',
  JetpackFeaturedMediaUrlGuidLocalFileRdev = 'jetpack_featured_media_url___guid___localFile___rdev',
  JetpackFeaturedMediaUrlGuidLocalFileIno = 'jetpack_featured_media_url___guid___localFile___ino',
  JetpackFeaturedMediaUrlGuidLocalFileAtimeMs = 'jetpack_featured_media_url___guid___localFile___atimeMs',
  JetpackFeaturedMediaUrlGuidLocalFileMtimeMs = 'jetpack_featured_media_url___guid___localFile___mtimeMs',
  JetpackFeaturedMediaUrlGuidLocalFileCtimeMs = 'jetpack_featured_media_url___guid___localFile___ctimeMs',
  JetpackFeaturedMediaUrlGuidLocalFileAtime = 'jetpack_featured_media_url___guid___localFile___atime',
  JetpackFeaturedMediaUrlGuidLocalFileMtime = 'jetpack_featured_media_url___guid___localFile___mtime',
  JetpackFeaturedMediaUrlGuidLocalFileCtime = 'jetpack_featured_media_url___guid___localFile___ctime',
  JetpackFeaturedMediaUrlGuidLocalFileBirthtime = 'jetpack_featured_media_url___guid___localFile___birthtime',
  JetpackFeaturedMediaUrlGuidLocalFileBirthtimeMs = 'jetpack_featured_media_url___guid___localFile___birthtimeMs',
  JetpackFeaturedMediaUrlGuidLocalFileBlksize = 'jetpack_featured_media_url___guid___localFile___blksize',
  JetpackFeaturedMediaUrlGuidLocalFileBlocks = 'jetpack_featured_media_url___guid___localFile___blocks',
  JetpackFeaturedMediaUrlGuidLocalFileUrl = 'jetpack_featured_media_url___guid___localFile___url',
  JetpackFeaturedMediaUrlGuidLocalFileId = 'jetpack_featured_media_url___guid___localFile___id',
  JetpackFeaturedMediaUrlGuidLocalFileChildren = 'jetpack_featured_media_url___guid___localFile___children',
  JetpackFeaturedMediaUrlGuidPath = 'jetpack_featured_media_url___guid___path',
  JetpackFeaturedMediaUrlLocalFileSourceInstanceName = 'jetpack_featured_media_url___localFile___sourceInstanceName',
  JetpackFeaturedMediaUrlLocalFileAbsolutePath = 'jetpack_featured_media_url___localFile___absolutePath',
  JetpackFeaturedMediaUrlLocalFileRelativePath = 'jetpack_featured_media_url___localFile___relativePath',
  JetpackFeaturedMediaUrlLocalFileExtension = 'jetpack_featured_media_url___localFile___extension',
  JetpackFeaturedMediaUrlLocalFileSize = 'jetpack_featured_media_url___localFile___size',
  JetpackFeaturedMediaUrlLocalFilePrettySize = 'jetpack_featured_media_url___localFile___prettySize',
  JetpackFeaturedMediaUrlLocalFileModifiedTime = 'jetpack_featured_media_url___localFile___modifiedTime',
  JetpackFeaturedMediaUrlLocalFileAccessTime = 'jetpack_featured_media_url___localFile___accessTime',
  JetpackFeaturedMediaUrlLocalFileChangeTime = 'jetpack_featured_media_url___localFile___changeTime',
  JetpackFeaturedMediaUrlLocalFileBirthTime = 'jetpack_featured_media_url___localFile___birthTime',
  JetpackFeaturedMediaUrlLocalFileRoot = 'jetpack_featured_media_url___localFile___root',
  JetpackFeaturedMediaUrlLocalFileDir = 'jetpack_featured_media_url___localFile___dir',
  JetpackFeaturedMediaUrlLocalFileBase = 'jetpack_featured_media_url___localFile___base',
  JetpackFeaturedMediaUrlLocalFileExt = 'jetpack_featured_media_url___localFile___ext',
  JetpackFeaturedMediaUrlLocalFileName = 'jetpack_featured_media_url___localFile___name',
  JetpackFeaturedMediaUrlLocalFileRelativeDirectory = 'jetpack_featured_media_url___localFile___relativeDirectory',
  JetpackFeaturedMediaUrlLocalFileDev = 'jetpack_featured_media_url___localFile___dev',
  JetpackFeaturedMediaUrlLocalFileMode = 'jetpack_featured_media_url___localFile___mode',
  JetpackFeaturedMediaUrlLocalFileNlink = 'jetpack_featured_media_url___localFile___nlink',
  JetpackFeaturedMediaUrlLocalFileUid = 'jetpack_featured_media_url___localFile___uid',
  JetpackFeaturedMediaUrlLocalFileGid = 'jetpack_featured_media_url___localFile___gid',
  JetpackFeaturedMediaUrlLocalFileRdev = 'jetpack_featured_media_url___localFile___rdev',
  JetpackFeaturedMediaUrlLocalFileIno = 'jetpack_featured_media_url___localFile___ino',
  JetpackFeaturedMediaUrlLocalFileAtimeMs = 'jetpack_featured_media_url___localFile___atimeMs',
  JetpackFeaturedMediaUrlLocalFileMtimeMs = 'jetpack_featured_media_url___localFile___mtimeMs',
  JetpackFeaturedMediaUrlLocalFileCtimeMs = 'jetpack_featured_media_url___localFile___ctimeMs',
  JetpackFeaturedMediaUrlLocalFileAtime = 'jetpack_featured_media_url___localFile___atime',
  JetpackFeaturedMediaUrlLocalFileMtime = 'jetpack_featured_media_url___localFile___mtime',
  JetpackFeaturedMediaUrlLocalFileCtime = 'jetpack_featured_media_url___localFile___ctime',
  JetpackFeaturedMediaUrlLocalFileBirthtime = 'jetpack_featured_media_url___localFile___birthtime',
  JetpackFeaturedMediaUrlLocalFileBirthtimeMs = 'jetpack_featured_media_url___localFile___birthtimeMs',
  JetpackFeaturedMediaUrlLocalFileBlksize = 'jetpack_featured_media_url___localFile___blksize',
  JetpackFeaturedMediaUrlLocalFileBlocks = 'jetpack_featured_media_url___localFile___blocks',
  JetpackFeaturedMediaUrlLocalFileUrl = 'jetpack_featured_media_url___localFile___url',
  JetpackFeaturedMediaUrlLocalFileChildImageSharpId = 'jetpack_featured_media_url___localFile___childImageSharp___id',
  JetpackFeaturedMediaUrlLocalFileChildImageSharpChildren = 'jetpack_featured_media_url___localFile___childImageSharp___children',
  JetpackFeaturedMediaUrlLocalFileId = 'jetpack_featured_media_url___localFile___id',
  JetpackFeaturedMediaUrlLocalFileParentId = 'jetpack_featured_media_url___localFile___parent___id',
  JetpackFeaturedMediaUrlLocalFileParentChildren = 'jetpack_featured_media_url___localFile___parent___children',
  JetpackFeaturedMediaUrlLocalFileChildren = 'jetpack_featured_media_url___localFile___children',
  JetpackFeaturedMediaUrlLocalFileChildrenId = 'jetpack_featured_media_url___localFile___children___id',
  JetpackFeaturedMediaUrlLocalFileChildrenChildren = 'jetpack_featured_media_url___localFile___children___children',
  JetpackFeaturedMediaUrlLocalFileInternalContent = 'jetpack_featured_media_url___localFile___internal___content',
  JetpackFeaturedMediaUrlLocalFileInternalContentDigest = 'jetpack_featured_media_url___localFile___internal___contentDigest',
  JetpackFeaturedMediaUrlLocalFileInternalDescription = 'jetpack_featured_media_url___localFile___internal___description',
  JetpackFeaturedMediaUrlLocalFileInternalFieldOwners = 'jetpack_featured_media_url___localFile___internal___fieldOwners',
  JetpackFeaturedMediaUrlLocalFileInternalIgnoreType = 'jetpack_featured_media_url___localFile___internal___ignoreType',
  JetpackFeaturedMediaUrlLocalFileInternalMediaType = 'jetpack_featured_media_url___localFile___internal___mediaType',
  JetpackFeaturedMediaUrlLocalFileInternalOwner = 'jetpack_featured_media_url___localFile___internal___owner',
  JetpackFeaturedMediaUrlLocalFileInternalType = 'jetpack_featured_media_url___localFile___internal___type',
  JetpackFeaturedMediaUrlPath = 'jetpack_featured_media_url___path',
  Path = 'path',
  Tags = 'tags',
  TagsId = 'tags___id',
  TagsParentId = 'tags___parent___id',
  TagsParentParentId = 'tags___parent___parent___id',
  TagsParentParentChildren = 'tags___parent___parent___children',
  TagsParentChildren = 'tags___parent___children',
  TagsParentChildrenId = 'tags___parent___children___id',
  TagsParentChildrenChildren = 'tags___parent___children___children',
  TagsParentInternalContent = 'tags___parent___internal___content',
  TagsParentInternalContentDigest = 'tags___parent___internal___contentDigest',
  TagsParentInternalDescription = 'tags___parent___internal___description',
  TagsParentInternalFieldOwners = 'tags___parent___internal___fieldOwners',
  TagsParentInternalIgnoreType = 'tags___parent___internal___ignoreType',
  TagsParentInternalMediaType = 'tags___parent___internal___mediaType',
  TagsParentInternalOwner = 'tags___parent___internal___owner',
  TagsParentInternalType = 'tags___parent___internal___type',
  TagsChildren = 'tags___children',
  TagsChildrenId = 'tags___children___id',
  TagsChildrenParentId = 'tags___children___parent___id',
  TagsChildrenParentChildren = 'tags___children___parent___children',
  TagsChildrenChildren = 'tags___children___children',
  TagsChildrenChildrenId = 'tags___children___children___id',
  TagsChildrenChildrenChildren = 'tags___children___children___children',
  TagsChildrenInternalContent = 'tags___children___internal___content',
  TagsChildrenInternalContentDigest = 'tags___children___internal___contentDigest',
  TagsChildrenInternalDescription = 'tags___children___internal___description',
  TagsChildrenInternalFieldOwners = 'tags___children___internal___fieldOwners',
  TagsChildrenInternalIgnoreType = 'tags___children___internal___ignoreType',
  TagsChildrenInternalMediaType = 'tags___children___internal___mediaType',
  TagsChildrenInternalOwner = 'tags___children___internal___owner',
  TagsChildrenInternalType = 'tags___children___internal___type',
  TagsInternalContent = 'tags___internal___content',
  TagsInternalContentDigest = 'tags___internal___contentDigest',
  TagsInternalDescription = 'tags___internal___description',
  TagsInternalFieldOwners = 'tags___internal___fieldOwners',
  TagsInternalIgnoreType = 'tags___internal___ignoreType',
  TagsInternalMediaType = 'tags___internal___mediaType',
  TagsInternalOwner = 'tags___internal___owner',
  TagsInternalType = 'tags___internal___type',
  TagsWordpressId = 'tags___wordpress_id',
  TagsCount = 'tags___count',
  TagsDescription = 'tags___description',
  TagsLink = 'tags___link',
  TagsName = 'tags___name',
  TagsSlug = 'tags___slug',
  TagsLinksSelf = 'tags____links___self',
  TagsLinksSelfHref = 'tags____links___self___href',
  TagsLinksCollection = 'tags____links___collection',
  TagsLinksCollectionHref = 'tags____links___collection___href',
  TagsLinksAbout = 'tags____links___about',
  TagsLinksAboutHref = 'tags____links___about___href',
  TagsLinksWpPostType = 'tags____links___wp_post_type',
  TagsLinksWpPostTypeHref = 'tags____links___wp_post_type___href',
  TagsLinksCuries = 'tags____links___curies',
  TagsLinksCuriesName = 'tags____links___curies___name',
  TagsLinksCuriesHref = 'tags____links___curies___href',
  TagsLinksCuriesTemplated = 'tags____links___curies___templated',
  TagsTaxonomyId = 'tags___taxonomy___id',
  TagsTaxonomyParentId = 'tags___taxonomy___parent___id',
  TagsTaxonomyParentChildren = 'tags___taxonomy___parent___children',
  TagsTaxonomyChildren = 'tags___taxonomy___children',
  TagsTaxonomyChildrenId = 'tags___taxonomy___children___id',
  TagsTaxonomyChildrenChildren = 'tags___taxonomy___children___children',
  TagsTaxonomyInternalContent = 'tags___taxonomy___internal___content',
  TagsTaxonomyInternalContentDigest = 'tags___taxonomy___internal___contentDigest',
  TagsTaxonomyInternalDescription = 'tags___taxonomy___internal___description',
  TagsTaxonomyInternalFieldOwners = 'tags___taxonomy___internal___fieldOwners',
  TagsTaxonomyInternalIgnoreType = 'tags___taxonomy___internal___ignoreType',
  TagsTaxonomyInternalMediaType = 'tags___taxonomy___internal___mediaType',
  TagsTaxonomyInternalOwner = 'tags___taxonomy___internal___owner',
  TagsTaxonomyInternalType = 'tags___taxonomy___internal___type',
  TagsTaxonomyWordpressId = 'tags___taxonomy___wordpress_id',
  TagsTaxonomyName = 'tags___taxonomy___name',
  TagsTaxonomySlug = 'tags___taxonomy___slug',
  TagsTaxonomyDescription = 'tags___taxonomy___description',
  TagsTaxonomyTypes = 'tags___taxonomy___types',
  TagsTaxonomyHierarchical = 'tags___taxonomy___hierarchical',
  TagsTaxonomyRestBase = 'tags___taxonomy___rest_base',
  TagsTaxonomyLinksCollection = 'tags___taxonomy____links___collection',
  TagsTaxonomyLinksWpItems = 'tags___taxonomy____links___wp_items',
  TagsTaxonomyLinksCuries = 'tags___taxonomy____links___curies',
  TagsPath = 'tags___path'
}

export type Wordpress__PostFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  comment_status?: Maybe<StringQueryOperatorInput>;
  ping_status?: Maybe<StringQueryOperatorInput>;
  sticky?: Maybe<BooleanQueryOperatorInput>;
  template?: Maybe<StringQueryOperatorInput>;
  format?: Maybe<StringQueryOperatorInput>;
  _links?: Maybe<Wordpress__Post_LinksFilterInput>;
  author?: Maybe<Wordpress__Wp_UsersFilterInput>;
  categories?: Maybe<Wordpress__CategoryFilterListInput>;
  featured_media?: Maybe<Wordpress__Wp_MediaFilterInput>;
  jetpack_featured_media_url?: Maybe<Wordpress__Wp_MediaFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<Wordpress__TagFilterListInput>;
};

export type Wordpress__PostFilterListInput = {
  elemMatch?: Maybe<Wordpress__PostFilterInput>;
};

export type Wordpress__PostGroupConnection = {
  __typename?: 'wordpress__POSTGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__PostEdge>;
  nodes: Array<Wordpress__Post>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__PostSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__PostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__Site_Metadata = Node & {
  __typename?: 'wordpress__site_metadata';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  home?: Maybe<Scalars['String']>;
};

export type Wordpress__Site_MetadataConnection = {
  __typename?: 'wordpress__site_metadataConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Site_MetadataEdge>;
  nodes: Array<Wordpress__Site_Metadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__Site_MetadataGroupConnection>;
};


export type Wordpress__Site_MetadataConnectionDistinctArgs = {
  field: Wordpress__Site_MetadataFieldsEnum;
};


export type Wordpress__Site_MetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__Site_MetadataFieldsEnum;
};

export type Wordpress__Site_MetadataEdge = {
  __typename?: 'wordpress__site_metadataEdge';
  next?: Maybe<Wordpress__Site_Metadata>;
  node: Wordpress__Site_Metadata;
  previous?: Maybe<Wordpress__Site_Metadata>;
};

export enum Wordpress__Site_MetadataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  Description = 'description',
  Url = 'url',
  Home = 'home'
}

export type Wordpress__Site_MetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  home?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Site_MetadataGroupConnection = {
  __typename?: 'wordpress__site_metadataGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Site_MetadataEdge>;
  nodes: Array<Wordpress__Site_Metadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__Site_MetadataSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Site_MetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__Tag = Node & {
  __typename?: 'wordpress__TAG';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  _links?: Maybe<Wordpress__Tag_Links>;
  taxonomy?: Maybe<Wordpress__Wp_Taxonomies>;
  path?: Maybe<Scalars['String']>;
};

export type Wordpress__Tag_Links = {
  __typename?: 'wordpress__TAG_links';
  self?: Maybe<Array<Maybe<Wordpress__Tag_LinksSelf>>>;
  collection?: Maybe<Array<Maybe<Wordpress__Tag_LinksCollection>>>;
  about?: Maybe<Array<Maybe<Wordpress__Tag_LinksAbout>>>;
  wp_post_type?: Maybe<Array<Maybe<Wordpress__Tag_LinksWp_Post_Type>>>;
  curies?: Maybe<Array<Maybe<Wordpress__Tag_LinksCuries>>>;
};

export type Wordpress__Tag_LinksAbout = {
  __typename?: 'wordpress__TAG_linksAbout';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Tag_LinksAboutFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Tag_LinksAboutFilterListInput = {
  elemMatch?: Maybe<Wordpress__Tag_LinksAboutFilterInput>;
};

export type Wordpress__Tag_LinksCollection = {
  __typename?: 'wordpress__TAG_linksCollection';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Tag_LinksCollectionFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Tag_LinksCollectionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Tag_LinksCollectionFilterInput>;
};

export type Wordpress__Tag_LinksCuries = {
  __typename?: 'wordpress__TAG_linksCuries';
  name?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  templated?: Maybe<Scalars['Boolean']>;
};

export type Wordpress__Tag_LinksCuriesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  templated?: Maybe<BooleanQueryOperatorInput>;
};

export type Wordpress__Tag_LinksCuriesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Tag_LinksCuriesFilterInput>;
};

export type Wordpress__Tag_LinksFilterInput = {
  self?: Maybe<Wordpress__Tag_LinksSelfFilterListInput>;
  collection?: Maybe<Wordpress__Tag_LinksCollectionFilterListInput>;
  about?: Maybe<Wordpress__Tag_LinksAboutFilterListInput>;
  wp_post_type?: Maybe<Wordpress__Tag_LinksWp_Post_TypeFilterListInput>;
  curies?: Maybe<Wordpress__Tag_LinksCuriesFilterListInput>;
};

export type Wordpress__Tag_LinksSelf = {
  __typename?: 'wordpress__TAG_linksSelf';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Tag_LinksSelfFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Tag_LinksSelfFilterListInput = {
  elemMatch?: Maybe<Wordpress__Tag_LinksSelfFilterInput>;
};

export type Wordpress__Tag_LinksWp_Post_Type = {
  __typename?: 'wordpress__TAG_linksWp_post_type';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Tag_LinksWp_Post_TypeFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Tag_LinksWp_Post_TypeFilterListInput = {
  elemMatch?: Maybe<Wordpress__Tag_LinksWp_Post_TypeFilterInput>;
};

export type Wordpress__TagConnection = {
  __typename?: 'wordpress__TAGConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__TagEdge>;
  nodes: Array<Wordpress__Tag>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__TagGroupConnection>;
};


export type Wordpress__TagConnectionDistinctArgs = {
  field: Wordpress__TagFieldsEnum;
};


export type Wordpress__TagConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__TagFieldsEnum;
};

export type Wordpress__TagEdge = {
  __typename?: 'wordpress__TAGEdge';
  next?: Maybe<Wordpress__Tag>;
  node: Wordpress__Tag;
  previous?: Maybe<Wordpress__Tag>;
};

export enum Wordpress__TagFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  WordpressId = 'wordpress_id',
  Count = 'count',
  Description = 'description',
  Link = 'link',
  Name = 'name',
  Slug = 'slug',
  LinksSelf = '_links___self',
  LinksSelfHref = '_links___self___href',
  LinksCollection = '_links___collection',
  LinksCollectionHref = '_links___collection___href',
  LinksAbout = '_links___about',
  LinksAboutHref = '_links___about___href',
  LinksWpPostType = '_links___wp_post_type',
  LinksWpPostTypeHref = '_links___wp_post_type___href',
  LinksCuries = '_links___curies',
  LinksCuriesName = '_links___curies___name',
  LinksCuriesHref = '_links___curies___href',
  LinksCuriesTemplated = '_links___curies___templated',
  TaxonomyId = 'taxonomy___id',
  TaxonomyParentId = 'taxonomy___parent___id',
  TaxonomyParentParentId = 'taxonomy___parent___parent___id',
  TaxonomyParentParentChildren = 'taxonomy___parent___parent___children',
  TaxonomyParentChildren = 'taxonomy___parent___children',
  TaxonomyParentChildrenId = 'taxonomy___parent___children___id',
  TaxonomyParentChildrenChildren = 'taxonomy___parent___children___children',
  TaxonomyParentInternalContent = 'taxonomy___parent___internal___content',
  TaxonomyParentInternalContentDigest = 'taxonomy___parent___internal___contentDigest',
  TaxonomyParentInternalDescription = 'taxonomy___parent___internal___description',
  TaxonomyParentInternalFieldOwners = 'taxonomy___parent___internal___fieldOwners',
  TaxonomyParentInternalIgnoreType = 'taxonomy___parent___internal___ignoreType',
  TaxonomyParentInternalMediaType = 'taxonomy___parent___internal___mediaType',
  TaxonomyParentInternalOwner = 'taxonomy___parent___internal___owner',
  TaxonomyParentInternalType = 'taxonomy___parent___internal___type',
  TaxonomyChildren = 'taxonomy___children',
  TaxonomyChildrenId = 'taxonomy___children___id',
  TaxonomyChildrenParentId = 'taxonomy___children___parent___id',
  TaxonomyChildrenParentChildren = 'taxonomy___children___parent___children',
  TaxonomyChildrenChildren = 'taxonomy___children___children',
  TaxonomyChildrenChildrenId = 'taxonomy___children___children___id',
  TaxonomyChildrenChildrenChildren = 'taxonomy___children___children___children',
  TaxonomyChildrenInternalContent = 'taxonomy___children___internal___content',
  TaxonomyChildrenInternalContentDigest = 'taxonomy___children___internal___contentDigest',
  TaxonomyChildrenInternalDescription = 'taxonomy___children___internal___description',
  TaxonomyChildrenInternalFieldOwners = 'taxonomy___children___internal___fieldOwners',
  TaxonomyChildrenInternalIgnoreType = 'taxonomy___children___internal___ignoreType',
  TaxonomyChildrenInternalMediaType = 'taxonomy___children___internal___mediaType',
  TaxonomyChildrenInternalOwner = 'taxonomy___children___internal___owner',
  TaxonomyChildrenInternalType = 'taxonomy___children___internal___type',
  TaxonomyInternalContent = 'taxonomy___internal___content',
  TaxonomyInternalContentDigest = 'taxonomy___internal___contentDigest',
  TaxonomyInternalDescription = 'taxonomy___internal___description',
  TaxonomyInternalFieldOwners = 'taxonomy___internal___fieldOwners',
  TaxonomyInternalIgnoreType = 'taxonomy___internal___ignoreType',
  TaxonomyInternalMediaType = 'taxonomy___internal___mediaType',
  TaxonomyInternalOwner = 'taxonomy___internal___owner',
  TaxonomyInternalType = 'taxonomy___internal___type',
  TaxonomyWordpressId = 'taxonomy___wordpress_id',
  TaxonomyName = 'taxonomy___name',
  TaxonomySlug = 'taxonomy___slug',
  TaxonomyDescription = 'taxonomy___description',
  TaxonomyTypes = 'taxonomy___types',
  TaxonomyHierarchical = 'taxonomy___hierarchical',
  TaxonomyRestBase = 'taxonomy___rest_base',
  TaxonomyLinksCollection = 'taxonomy____links___collection',
  TaxonomyLinksCollectionHref = 'taxonomy____links___collection___href',
  TaxonomyLinksWpItems = 'taxonomy____links___wp_items',
  TaxonomyLinksWpItemsHref = 'taxonomy____links___wp_items___href',
  TaxonomyLinksCuries = 'taxonomy____links___curies',
  TaxonomyLinksCuriesName = 'taxonomy____links___curies___name',
  TaxonomyLinksCuriesHref = 'taxonomy____links___curies___href',
  TaxonomyLinksCuriesTemplated = 'taxonomy____links___curies___templated',
  Path = 'path'
}

export type Wordpress__TagFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  count?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  _links?: Maybe<Wordpress__Tag_LinksFilterInput>;
  taxonomy?: Maybe<Wordpress__Wp_TaxonomiesFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__TagFilterListInput = {
  elemMatch?: Maybe<Wordpress__TagFilterInput>;
};

export type Wordpress__TagGroupConnection = {
  __typename?: 'wordpress__TAGGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__TagEdge>;
  nodes: Array<Wordpress__Tag>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__TagSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__TagFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__Wp_Action_Monitor = Node & {
  __typename?: 'wordpress__wp_action_monitor';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Date']>;
  guid?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['Date']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  _links?: Maybe<Wordpress__Wp_Action_Monitor_Links>;
  path?: Maybe<Scalars['String']>;
};


export type Wordpress__Wp_Action_MonitorDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type Wordpress__Wp_Action_MonitorModifiedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Action_Monitor_Links = {
  __typename?: 'wordpress__wp_action_monitor_links';
  self?: Maybe<Array<Maybe<Wordpress__Wp_Action_Monitor_LinksSelf>>>;
  collection?: Maybe<Array<Maybe<Wordpress__Wp_Action_Monitor_LinksCollection>>>;
  about?: Maybe<Array<Maybe<Wordpress__Wp_Action_Monitor_LinksAbout>>>;
  wp_attachment?: Maybe<Array<Maybe<Wordpress__Wp_Action_Monitor_LinksWp_Attachment>>>;
  curies?: Maybe<Array<Maybe<Wordpress__Wp_Action_Monitor_LinksCuries>>>;
};

export type Wordpress__Wp_Action_Monitor_LinksAbout = {
  __typename?: 'wordpress__wp_action_monitor_linksAbout';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Action_Monitor_LinksAboutFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Action_Monitor_LinksAboutFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Action_Monitor_LinksAboutFilterInput>;
};

export type Wordpress__Wp_Action_Monitor_LinksCollection = {
  __typename?: 'wordpress__wp_action_monitor_linksCollection';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Action_Monitor_LinksCollectionFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Action_Monitor_LinksCollectionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Action_Monitor_LinksCollectionFilterInput>;
};

export type Wordpress__Wp_Action_Monitor_LinksCuries = {
  __typename?: 'wordpress__wp_action_monitor_linksCuries';
  name?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  templated?: Maybe<Scalars['Boolean']>;
};

export type Wordpress__Wp_Action_Monitor_LinksCuriesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  templated?: Maybe<BooleanQueryOperatorInput>;
};

export type Wordpress__Wp_Action_Monitor_LinksCuriesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Action_Monitor_LinksCuriesFilterInput>;
};

export type Wordpress__Wp_Action_Monitor_LinksFilterInput = {
  self?: Maybe<Wordpress__Wp_Action_Monitor_LinksSelfFilterListInput>;
  collection?: Maybe<Wordpress__Wp_Action_Monitor_LinksCollectionFilterListInput>;
  about?: Maybe<Wordpress__Wp_Action_Monitor_LinksAboutFilterListInput>;
  wp_attachment?: Maybe<Wordpress__Wp_Action_Monitor_LinksWp_AttachmentFilterListInput>;
  curies?: Maybe<Wordpress__Wp_Action_Monitor_LinksCuriesFilterListInput>;
};

export type Wordpress__Wp_Action_Monitor_LinksSelf = {
  __typename?: 'wordpress__wp_action_monitor_linksSelf';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Action_Monitor_LinksSelfFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Action_Monitor_LinksSelfFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Action_Monitor_LinksSelfFilterInput>;
};

export type Wordpress__Wp_Action_Monitor_LinksWp_Attachment = {
  __typename?: 'wordpress__wp_action_monitor_linksWp_attachment';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Action_Monitor_LinksWp_AttachmentFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Action_Monitor_LinksWp_AttachmentFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Action_Monitor_LinksWp_AttachmentFilterInput>;
};

export type Wordpress__Wp_Action_MonitorConnection = {
  __typename?: 'wordpress__wp_action_monitorConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Wp_Action_MonitorEdge>;
  nodes: Array<Wordpress__Wp_Action_Monitor>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__Wp_Action_MonitorGroupConnection>;
};


export type Wordpress__Wp_Action_MonitorConnectionDistinctArgs = {
  field: Wordpress__Wp_Action_MonitorFieldsEnum;
};


export type Wordpress__Wp_Action_MonitorConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__Wp_Action_MonitorFieldsEnum;
};

export type Wordpress__Wp_Action_MonitorEdge = {
  __typename?: 'wordpress__wp_action_monitorEdge';
  next?: Maybe<Wordpress__Wp_Action_Monitor>;
  node: Wordpress__Wp_Action_Monitor;
  previous?: Maybe<Wordpress__Wp_Action_Monitor>;
};

export enum Wordpress__Wp_Action_MonitorFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  WordpressId = 'wordpress_id',
  Date = 'date',
  Guid = 'guid',
  Modified = 'modified',
  Slug = 'slug',
  Status = 'status',
  Type = 'type',
  Link = 'link',
  Title = 'title',
  Template = 'template',
  LinksSelf = '_links___self',
  LinksSelfHref = '_links___self___href',
  LinksCollection = '_links___collection',
  LinksCollectionHref = '_links___collection___href',
  LinksAbout = '_links___about',
  LinksAboutHref = '_links___about___href',
  LinksWpAttachment = '_links___wp_attachment',
  LinksWpAttachmentHref = '_links___wp_attachment___href',
  LinksCuries = '_links___curies',
  LinksCuriesName = '_links___curies___name',
  LinksCuriesHref = '_links___curies___href',
  LinksCuriesTemplated = '_links___curies___templated',
  Path = 'path'
}

export type Wordpress__Wp_Action_MonitorFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<StringQueryOperatorInput>;
  _links?: Maybe<Wordpress__Wp_Action_Monitor_LinksFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Action_MonitorGroupConnection = {
  __typename?: 'wordpress__wp_action_monitorGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Wp_Action_MonitorEdge>;
  nodes: Array<Wordpress__Wp_Action_Monitor>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Action_MonitorSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Wp_Action_MonitorFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__Wp_Api_Menus_Menu_Locations = Node & {
  __typename?: 'wordpress__wp_api_menus_menu_locations';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  meta?: Maybe<Wordpress__Wp_Api_Menus_Menu_LocationsMeta>;
};

export type Wordpress__Wp_Api_Menus_Menu_LocationsConnection = {
  __typename?: 'wordpress__wp_api_menus_menu_locationsConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Wp_Api_Menus_Menu_LocationsEdge>;
  nodes: Array<Wordpress__Wp_Api_Menus_Menu_Locations>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__Wp_Api_Menus_Menu_LocationsGroupConnection>;
};


export type Wordpress__Wp_Api_Menus_Menu_LocationsConnectionDistinctArgs = {
  field: Wordpress__Wp_Api_Menus_Menu_LocationsFieldsEnum;
};


export type Wordpress__Wp_Api_Menus_Menu_LocationsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__Wp_Api_Menus_Menu_LocationsFieldsEnum;
};

export type Wordpress__Wp_Api_Menus_Menu_LocationsEdge = {
  __typename?: 'wordpress__wp_api_menus_menu_locationsEdge';
  next?: Maybe<Wordpress__Wp_Api_Menus_Menu_Locations>;
  node: Wordpress__Wp_Api_Menus_Menu_Locations;
  previous?: Maybe<Wordpress__Wp_Api_Menus_Menu_Locations>;
};

export enum Wordpress__Wp_Api_Menus_Menu_LocationsFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  WordpressId = 'wordpress_id',
  Label = 'label',
  MetaLinksCollection = 'meta___links___collection',
  MetaLinksSelf = 'meta___links___self'
}

export type Wordpress__Wp_Api_Menus_Menu_LocationsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  meta?: Maybe<Wordpress__Wp_Api_Menus_Menu_LocationsMetaFilterInput>;
};

export type Wordpress__Wp_Api_Menus_Menu_LocationsGroupConnection = {
  __typename?: 'wordpress__wp_api_menus_menu_locationsGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Wp_Api_Menus_Menu_LocationsEdge>;
  nodes: Array<Wordpress__Wp_Api_Menus_Menu_Locations>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Api_Menus_Menu_LocationsMeta = {
  __typename?: 'wordpress__wp_api_menus_menu_locationsMeta';
  links?: Maybe<Wordpress__Wp_Api_Menus_Menu_LocationsMetaLinks>;
};

export type Wordpress__Wp_Api_Menus_Menu_LocationsMetaFilterInput = {
  links?: Maybe<Wordpress__Wp_Api_Menus_Menu_LocationsMetaLinksFilterInput>;
};

export type Wordpress__Wp_Api_Menus_Menu_LocationsMetaLinks = {
  __typename?: 'wordpress__wp_api_menus_menu_locationsMetaLinks';
  collection?: Maybe<Scalars['String']>;
  self?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Api_Menus_Menu_LocationsMetaLinksFilterInput = {
  collection?: Maybe<StringQueryOperatorInput>;
  self?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Api_Menus_Menu_LocationsSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Wp_Api_Menus_Menu_LocationsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__Wp_Api_Menus_Menus = Node & {
  __typename?: 'wordpress__wp_api_menus_menus';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  term_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  term_group?: Maybe<Scalars['Int']>;
  term_taxonomy_id?: Maybe<Scalars['Int']>;
  taxonomy?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  wordpress_parent?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['String']>;
  wordpress_id?: Maybe<Scalars['Int']>;
  meta?: Maybe<Wordpress__Wp_Api_Menus_MenusMeta>;
};

export type Wordpress__Wp_Api_Menus_Menus_Items = Node & {
  __typename?: 'wordpress__wp_api_menus_menus_items';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<Wordpress__Wp_Api_Menus_Menus_ItemsItems>>>;
  meta?: Maybe<Wordpress__Wp_Api_Menus_Menus_ItemsMeta>;
};

export type Wordpress__Wp_Api_Menus_Menus_ItemsConnection = {
  __typename?: 'wordpress__wp_api_menus_menus_itemsConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Wp_Api_Menus_Menus_ItemsEdge>;
  nodes: Array<Wordpress__Wp_Api_Menus_Menus_Items>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__Wp_Api_Menus_Menus_ItemsGroupConnection>;
};


export type Wordpress__Wp_Api_Menus_Menus_ItemsConnectionDistinctArgs = {
  field: Wordpress__Wp_Api_Menus_Menus_ItemsFieldsEnum;
};


export type Wordpress__Wp_Api_Menus_Menus_ItemsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__Wp_Api_Menus_Menus_ItemsFieldsEnum;
};

export type Wordpress__Wp_Api_Menus_Menus_ItemsEdge = {
  __typename?: 'wordpress__wp_api_menus_menus_itemsEdge';
  next?: Maybe<Wordpress__Wp_Api_Menus_Menus_Items>;
  node: Wordpress__Wp_Api_Menus_Menus_Items;
  previous?: Maybe<Wordpress__Wp_Api_Menus_Menus_Items>;
};

export enum Wordpress__Wp_Api_Menus_Menus_ItemsFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  WordpressId = 'wordpress_id',
  Name = 'name',
  Slug = 'slug',
  Description = 'description',
  Count = 'count',
  Items = 'items',
  ItemsWordpressId = 'items___wordpress_id',
  ItemsOrder = 'items___order',
  ItemsWordpressParent = 'items___wordpress_parent',
  ItemsTitle = 'items___title',
  ItemsUrl = 'items___url',
  ItemsAttr = 'items___attr',
  ItemsTarget = 'items___target',
  ItemsClasses = 'items___classes',
  ItemsXfn = 'items___xfn',
  ItemsDescription = 'items___description',
  ItemsObjectId = 'items___object_id',
  ItemsObject = 'items___object',
  ItemsObjectSlug = 'items___object_slug',
  ItemsType = 'items___type',
  ItemsTypeLabel = 'items___type_label',
  MetaLinksCollection = 'meta___links___collection',
  MetaLinksSelf = 'meta___links___self'
}

export type Wordpress__Wp_Api_Menus_Menus_ItemsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  count?: Maybe<IntQueryOperatorInput>;
  items?: Maybe<Wordpress__Wp_Api_Menus_Menus_ItemsItemsFilterListInput>;
  meta?: Maybe<Wordpress__Wp_Api_Menus_Menus_ItemsMetaFilterInput>;
};

export type Wordpress__Wp_Api_Menus_Menus_ItemsGroupConnection = {
  __typename?: 'wordpress__wp_api_menus_menus_itemsGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Wp_Api_Menus_Menus_ItemsEdge>;
  nodes: Array<Wordpress__Wp_Api_Menus_Menus_Items>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Api_Menus_Menus_ItemsItems = {
  __typename?: 'wordpress__wp_api_menus_menus_itemsItems';
  wordpress_id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  wordpress_parent?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  attr?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  classes?: Maybe<Scalars['String']>;
  xfn?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  object_id?: Maybe<Scalars['Int']>;
  object?: Maybe<Scalars['String']>;
  object_slug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  type_label?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Api_Menus_Menus_ItemsItemsFilterInput = {
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  order?: Maybe<IntQueryOperatorInput>;
  wordpress_parent?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  attr?: Maybe<StringQueryOperatorInput>;
  target?: Maybe<StringQueryOperatorInput>;
  classes?: Maybe<StringQueryOperatorInput>;
  xfn?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  object_id?: Maybe<IntQueryOperatorInput>;
  object?: Maybe<StringQueryOperatorInput>;
  object_slug?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  type_label?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Api_Menus_Menus_ItemsItemsFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Api_Menus_Menus_ItemsItemsFilterInput>;
};

export type Wordpress__Wp_Api_Menus_Menus_ItemsMeta = {
  __typename?: 'wordpress__wp_api_menus_menus_itemsMeta';
  links?: Maybe<Wordpress__Wp_Api_Menus_Menus_ItemsMetaLinks>;
};

export type Wordpress__Wp_Api_Menus_Menus_ItemsMetaFilterInput = {
  links?: Maybe<Wordpress__Wp_Api_Menus_Menus_ItemsMetaLinksFilterInput>;
};

export type Wordpress__Wp_Api_Menus_Menus_ItemsMetaLinks = {
  __typename?: 'wordpress__wp_api_menus_menus_itemsMetaLinks';
  collection?: Maybe<Scalars['String']>;
  self?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Api_Menus_Menus_ItemsMetaLinksFilterInput = {
  collection?: Maybe<StringQueryOperatorInput>;
  self?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Api_Menus_Menus_ItemsSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Wp_Api_Menus_Menus_ItemsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__Wp_Api_Menus_MenusConnection = {
  __typename?: 'wordpress__wp_api_menus_menusConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Wp_Api_Menus_MenusEdge>;
  nodes: Array<Wordpress__Wp_Api_Menus_Menus>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__Wp_Api_Menus_MenusGroupConnection>;
};


export type Wordpress__Wp_Api_Menus_MenusConnectionDistinctArgs = {
  field: Wordpress__Wp_Api_Menus_MenusFieldsEnum;
};


export type Wordpress__Wp_Api_Menus_MenusConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__Wp_Api_Menus_MenusFieldsEnum;
};

export type Wordpress__Wp_Api_Menus_MenusEdge = {
  __typename?: 'wordpress__wp_api_menus_menusEdge';
  next?: Maybe<Wordpress__Wp_Api_Menus_Menus>;
  node: Wordpress__Wp_Api_Menus_Menus;
  previous?: Maybe<Wordpress__Wp_Api_Menus_Menus>;
};

export enum Wordpress__Wp_Api_Menus_MenusFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  TermId = 'term_id',
  Name = 'name',
  Slug = 'slug',
  TermGroup = 'term_group',
  TermTaxonomyId = 'term_taxonomy_id',
  Taxonomy = 'taxonomy',
  Description = 'description',
  WordpressParent = 'wordpress_parent',
  Count = 'count',
  Filter = 'filter',
  WordpressId = 'wordpress_id',
  MetaLinksCollection = 'meta___links___collection',
  MetaLinksSelf = 'meta___links___self'
}

export type Wordpress__Wp_Api_Menus_MenusFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  term_id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  term_group?: Maybe<IntQueryOperatorInput>;
  term_taxonomy_id?: Maybe<IntQueryOperatorInput>;
  taxonomy?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  wordpress_parent?: Maybe<IntQueryOperatorInput>;
  count?: Maybe<IntQueryOperatorInput>;
  filter?: Maybe<StringQueryOperatorInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  meta?: Maybe<Wordpress__Wp_Api_Menus_MenusMetaFilterInput>;
};

export type Wordpress__Wp_Api_Menus_MenusGroupConnection = {
  __typename?: 'wordpress__wp_api_menus_menusGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Wp_Api_Menus_MenusEdge>;
  nodes: Array<Wordpress__Wp_Api_Menus_Menus>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Api_Menus_MenusMeta = {
  __typename?: 'wordpress__wp_api_menus_menusMeta';
  links?: Maybe<Wordpress__Wp_Api_Menus_MenusMetaLinks>;
};

export type Wordpress__Wp_Api_Menus_MenusMetaFilterInput = {
  links?: Maybe<Wordpress__Wp_Api_Menus_MenusMetaLinksFilterInput>;
};

export type Wordpress__Wp_Api_Menus_MenusMetaLinks = {
  __typename?: 'wordpress__wp_api_menus_menusMetaLinks';
  collection?: Maybe<Scalars['String']>;
  self?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Api_Menus_MenusMetaLinksFilterInput = {
  collection?: Maybe<StringQueryOperatorInput>;
  self?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Api_Menus_MenusSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Wp_Api_Menus_MenusFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__Wp_Comments = Node & {
  __typename?: 'wordpress__wp_comments';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['Int']>;
  post?: Maybe<Scalars['Int']>;
  wordpress_parent?: Maybe<Scalars['Int']>;
  author?: Maybe<Scalars['Int']>;
  author_name?: Maybe<Scalars['String']>;
  author_url?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  content?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  author_avatar_urls?: Maybe<Wordpress__Wp_CommentsAuthor_Avatar_Urls>;
  _links?: Maybe<Wordpress__Wp_Comments_Links>;
  path?: Maybe<Scalars['String']>;
};


export type Wordpress__Wp_CommentsDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Comments_Links = {
  __typename?: 'wordpress__wp_comments_links';
  self?: Maybe<Array<Maybe<Wordpress__Wp_Comments_LinksSelf>>>;
  collection?: Maybe<Array<Maybe<Wordpress__Wp_Comments_LinksCollection>>>;
  up?: Maybe<Array<Maybe<Wordpress__Wp_Comments_LinksUp>>>;
};

export type Wordpress__Wp_Comments_LinksCollection = {
  __typename?: 'wordpress__wp_comments_linksCollection';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Comments_LinksCollectionFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Comments_LinksCollectionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Comments_LinksCollectionFilterInput>;
};

export type Wordpress__Wp_Comments_LinksFilterInput = {
  self?: Maybe<Wordpress__Wp_Comments_LinksSelfFilterListInput>;
  collection?: Maybe<Wordpress__Wp_Comments_LinksCollectionFilterListInput>;
  up?: Maybe<Wordpress__Wp_Comments_LinksUpFilterListInput>;
};

export type Wordpress__Wp_Comments_LinksSelf = {
  __typename?: 'wordpress__wp_comments_linksSelf';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Comments_LinksSelfFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Comments_LinksSelfFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Comments_LinksSelfFilterInput>;
};

export type Wordpress__Wp_Comments_LinksUp = {
  __typename?: 'wordpress__wp_comments_linksUp';
  embeddable?: Maybe<Scalars['Boolean']>;
  post_type?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Comments_LinksUpFilterInput = {
  embeddable?: Maybe<BooleanQueryOperatorInput>;
  post_type?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Comments_LinksUpFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Comments_LinksUpFilterInput>;
};

export type Wordpress__Wp_CommentsAuthor_Avatar_Urls = {
  __typename?: 'wordpress__wp_commentsAuthor_avatar_urls';
  wordpress_24?: Maybe<Scalars['String']>;
  wordpress_48?: Maybe<Scalars['String']>;
  wordpress_96?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_CommentsAuthor_Avatar_UrlsFilterInput = {
  wordpress_24?: Maybe<StringQueryOperatorInput>;
  wordpress_48?: Maybe<StringQueryOperatorInput>;
  wordpress_96?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_CommentsConnection = {
  __typename?: 'wordpress__wp_commentsConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Wp_CommentsEdge>;
  nodes: Array<Wordpress__Wp_Comments>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__Wp_CommentsGroupConnection>;
};


export type Wordpress__Wp_CommentsConnectionDistinctArgs = {
  field: Wordpress__Wp_CommentsFieldsEnum;
};


export type Wordpress__Wp_CommentsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__Wp_CommentsFieldsEnum;
};

export type Wordpress__Wp_CommentsEdge = {
  __typename?: 'wordpress__wp_commentsEdge';
  next?: Maybe<Wordpress__Wp_Comments>;
  node: Wordpress__Wp_Comments;
  previous?: Maybe<Wordpress__Wp_Comments>;
};

export enum Wordpress__Wp_CommentsFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  WordpressId = 'wordpress_id',
  Post = 'post',
  WordpressParent = 'wordpress_parent',
  Author = 'author',
  AuthorName = 'author_name',
  AuthorUrl = 'author_url',
  Date = 'date',
  Content = 'content',
  Link = 'link',
  Status = 'status',
  Type = 'type',
  AuthorAvatarUrlsWordpress_24 = 'author_avatar_urls___wordpress_24',
  AuthorAvatarUrlsWordpress_48 = 'author_avatar_urls___wordpress_48',
  AuthorAvatarUrlsWordpress_96 = 'author_avatar_urls___wordpress_96',
  LinksSelf = '_links___self',
  LinksSelfHref = '_links___self___href',
  LinksCollection = '_links___collection',
  LinksCollectionHref = '_links___collection___href',
  LinksUp = '_links___up',
  LinksUpEmbeddable = '_links___up___embeddable',
  LinksUpPostType = '_links___up___post_type',
  LinksUpHref = '_links___up___href',
  Path = 'path'
}

export type Wordpress__Wp_CommentsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  post?: Maybe<IntQueryOperatorInput>;
  wordpress_parent?: Maybe<IntQueryOperatorInput>;
  author?: Maybe<IntQueryOperatorInput>;
  author_name?: Maybe<StringQueryOperatorInput>;
  author_url?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  author_avatar_urls?: Maybe<Wordpress__Wp_CommentsAuthor_Avatar_UrlsFilterInput>;
  _links?: Maybe<Wordpress__Wp_Comments_LinksFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_CommentsGroupConnection = {
  __typename?: 'wordpress__wp_commentsGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Wp_CommentsEdge>;
  nodes: Array<Wordpress__Wp_Comments>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_CommentsSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Wp_CommentsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__Wp_Media = Node & {
  __typename?: 'wordpress__wp_media';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Date']>;
  modified?: Maybe<Scalars['Date']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  comment_status?: Maybe<Scalars['String']>;
  ping_status?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  alt_text?: Maybe<Scalars['String']>;
  media_type?: Maybe<Scalars['String']>;
  mime_type?: Maybe<Scalars['String']>;
  media_details?: Maybe<Wordpress__Wp_MediaMedia_Details>;
  source_url?: Maybe<Scalars['String']>;
  _links?: Maybe<Wordpress__Wp_Media_Links>;
  author?: Maybe<Wordpress__Wp_Users>;
  guid?: Maybe<Wordpress__Wp_Media>;
  localFile?: Maybe<File>;
  path?: Maybe<Scalars['String']>;
};


export type Wordpress__Wp_MediaDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type Wordpress__Wp_MediaModifiedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Media_Links = {
  __typename?: 'wordpress__wp_media_links';
  self?: Maybe<Array<Maybe<Wordpress__Wp_Media_LinksSelf>>>;
  collection?: Maybe<Array<Maybe<Wordpress__Wp_Media_LinksCollection>>>;
  about?: Maybe<Array<Maybe<Wordpress__Wp_Media_LinksAbout>>>;
  author?: Maybe<Array<Maybe<Wordpress__Wp_Media_LinksAuthor>>>;
  replies?: Maybe<Array<Maybe<Wordpress__Wp_Media_LinksReplies>>>;
};

export type Wordpress__Wp_Media_LinksAbout = {
  __typename?: 'wordpress__wp_media_linksAbout';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Media_LinksAboutFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Media_LinksAboutFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Media_LinksAboutFilterInput>;
};

export type Wordpress__Wp_Media_LinksAuthor = {
  __typename?: 'wordpress__wp_media_linksAuthor';
  embeddable?: Maybe<Scalars['Boolean']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Media_LinksAuthorFilterInput = {
  embeddable?: Maybe<BooleanQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Media_LinksAuthorFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Media_LinksAuthorFilterInput>;
};

export type Wordpress__Wp_Media_LinksCollection = {
  __typename?: 'wordpress__wp_media_linksCollection';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Media_LinksCollectionFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Media_LinksCollectionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Media_LinksCollectionFilterInput>;
};

export type Wordpress__Wp_Media_LinksFilterInput = {
  self?: Maybe<Wordpress__Wp_Media_LinksSelfFilterListInput>;
  collection?: Maybe<Wordpress__Wp_Media_LinksCollectionFilterListInput>;
  about?: Maybe<Wordpress__Wp_Media_LinksAboutFilterListInput>;
  author?: Maybe<Wordpress__Wp_Media_LinksAuthorFilterListInput>;
  replies?: Maybe<Wordpress__Wp_Media_LinksRepliesFilterListInput>;
};

export type Wordpress__Wp_Media_LinksReplies = {
  __typename?: 'wordpress__wp_media_linksReplies';
  embeddable?: Maybe<Scalars['Boolean']>;
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Media_LinksRepliesFilterInput = {
  embeddable?: Maybe<BooleanQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Media_LinksRepliesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Media_LinksRepliesFilterInput>;
};

export type Wordpress__Wp_Media_LinksSelf = {
  __typename?: 'wordpress__wp_media_linksSelf';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Media_LinksSelfFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Media_LinksSelfFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Media_LinksSelfFilterInput>;
};

export type Wordpress__Wp_MediaConnection = {
  __typename?: 'wordpress__wp_mediaConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Wp_MediaEdge>;
  nodes: Array<Wordpress__Wp_Media>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__Wp_MediaGroupConnection>;
};


export type Wordpress__Wp_MediaConnectionDistinctArgs = {
  field: Wordpress__Wp_MediaFieldsEnum;
};


export type Wordpress__Wp_MediaConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__Wp_MediaFieldsEnum;
};

export type Wordpress__Wp_MediaEdge = {
  __typename?: 'wordpress__wp_mediaEdge';
  next?: Maybe<Wordpress__Wp_Media>;
  node: Wordpress__Wp_Media;
  previous?: Maybe<Wordpress__Wp_Media>;
};

export enum Wordpress__Wp_MediaFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  WordpressId = 'wordpress_id',
  Date = 'date',
  Modified = 'modified',
  Slug = 'slug',
  Status = 'status',
  Type = 'type',
  Link = 'link',
  Title = 'title',
  CommentStatus = 'comment_status',
  PingStatus = 'ping_status',
  Template = 'template',
  Description = 'description',
  Caption = 'caption',
  AltText = 'alt_text',
  MediaType = 'media_type',
  MimeType = 'mime_type',
  MediaDetailsWidth = 'media_details___width',
  MediaDetailsHeight = 'media_details___height',
  MediaDetailsFile = 'media_details___file',
  MediaDetailsImageMetaAperture = 'media_details___image_meta___aperture',
  MediaDetailsImageMetaCredit = 'media_details___image_meta___credit',
  MediaDetailsImageMetaCamera = 'media_details___image_meta___camera',
  MediaDetailsImageMetaCaption = 'media_details___image_meta___caption',
  MediaDetailsImageMetaCreatedTimestamp = 'media_details___image_meta___created_timestamp',
  MediaDetailsImageMetaCopyright = 'media_details___image_meta___copyright',
  MediaDetailsImageMetaFocalLength = 'media_details___image_meta___focal_length',
  MediaDetailsImageMetaIso = 'media_details___image_meta___iso',
  MediaDetailsImageMetaShutterSpeed = 'media_details___image_meta___shutter_speed',
  MediaDetailsImageMetaTitle = 'media_details___image_meta___title',
  MediaDetailsImageMetaOrientation = 'media_details___image_meta___orientation',
  MediaDetailsOriginalImage = 'media_details___original_image',
  SourceUrl = 'source_url',
  LinksSelf = '_links___self',
  LinksSelfHref = '_links___self___href',
  LinksCollection = '_links___collection',
  LinksCollectionHref = '_links___collection___href',
  LinksAbout = '_links___about',
  LinksAboutHref = '_links___about___href',
  LinksAuthor = '_links___author',
  LinksAuthorEmbeddable = '_links___author___embeddable',
  LinksAuthorHref = '_links___author___href',
  LinksReplies = '_links___replies',
  LinksRepliesEmbeddable = '_links___replies___embeddable',
  LinksRepliesHref = '_links___replies___href',
  AuthorId = 'author___id',
  AuthorParentId = 'author___parent___id',
  AuthorParentParentId = 'author___parent___parent___id',
  AuthorParentParentChildren = 'author___parent___parent___children',
  AuthorParentChildren = 'author___parent___children',
  AuthorParentChildrenId = 'author___parent___children___id',
  AuthorParentChildrenChildren = 'author___parent___children___children',
  AuthorParentInternalContent = 'author___parent___internal___content',
  AuthorParentInternalContentDigest = 'author___parent___internal___contentDigest',
  AuthorParentInternalDescription = 'author___parent___internal___description',
  AuthorParentInternalFieldOwners = 'author___parent___internal___fieldOwners',
  AuthorParentInternalIgnoreType = 'author___parent___internal___ignoreType',
  AuthorParentInternalMediaType = 'author___parent___internal___mediaType',
  AuthorParentInternalOwner = 'author___parent___internal___owner',
  AuthorParentInternalType = 'author___parent___internal___type',
  AuthorChildren = 'author___children',
  AuthorChildrenId = 'author___children___id',
  AuthorChildrenParentId = 'author___children___parent___id',
  AuthorChildrenParentChildren = 'author___children___parent___children',
  AuthorChildrenChildren = 'author___children___children',
  AuthorChildrenChildrenId = 'author___children___children___id',
  AuthorChildrenChildrenChildren = 'author___children___children___children',
  AuthorChildrenInternalContent = 'author___children___internal___content',
  AuthorChildrenInternalContentDigest = 'author___children___internal___contentDigest',
  AuthorChildrenInternalDescription = 'author___children___internal___description',
  AuthorChildrenInternalFieldOwners = 'author___children___internal___fieldOwners',
  AuthorChildrenInternalIgnoreType = 'author___children___internal___ignoreType',
  AuthorChildrenInternalMediaType = 'author___children___internal___mediaType',
  AuthorChildrenInternalOwner = 'author___children___internal___owner',
  AuthorChildrenInternalType = 'author___children___internal___type',
  AuthorInternalContent = 'author___internal___content',
  AuthorInternalContentDigest = 'author___internal___contentDigest',
  AuthorInternalDescription = 'author___internal___description',
  AuthorInternalFieldOwners = 'author___internal___fieldOwners',
  AuthorInternalIgnoreType = 'author___internal___ignoreType',
  AuthorInternalMediaType = 'author___internal___mediaType',
  AuthorInternalOwner = 'author___internal___owner',
  AuthorInternalType = 'author___internal___type',
  AuthorWordpressId = 'author___wordpress_id',
  AuthorName = 'author___name',
  AuthorUrl = 'author___url',
  AuthorDescription = 'author___description',
  AuthorLink = 'author___link',
  AuthorSlug = 'author___slug',
  AuthorAvatarUrlsWordpress_24 = 'author___avatar_urls___wordpress_24',
  AuthorAvatarUrlsWordpress_48 = 'author___avatar_urls___wordpress_48',
  AuthorAvatarUrlsWordpress_96 = 'author___avatar_urls___wordpress_96',
  AuthorLinksSelf = 'author____links___self',
  AuthorLinksSelfHref = 'author____links___self___href',
  AuthorLinksCollection = 'author____links___collection',
  AuthorLinksCollectionHref = 'author____links___collection___href',
  AuthorAuthoredWordpressPage = 'author___authored_wordpress__PAGE',
  AuthorAuthoredWordpressPageId = 'author___authored_wordpress__PAGE___id',
  AuthorAuthoredWordpressPageParentId = 'author___authored_wordpress__PAGE___parent___id',
  AuthorAuthoredWordpressPageParentChildren = 'author___authored_wordpress__PAGE___parent___children',
  AuthorAuthoredWordpressPageChildren = 'author___authored_wordpress__PAGE___children',
  AuthorAuthoredWordpressPageChildrenId = 'author___authored_wordpress__PAGE___children___id',
  AuthorAuthoredWordpressPageChildrenChildren = 'author___authored_wordpress__PAGE___children___children',
  AuthorAuthoredWordpressPageInternalContent = 'author___authored_wordpress__PAGE___internal___content',
  AuthorAuthoredWordpressPageInternalContentDigest = 'author___authored_wordpress__PAGE___internal___contentDigest',
  AuthorAuthoredWordpressPageInternalDescription = 'author___authored_wordpress__PAGE___internal___description',
  AuthorAuthoredWordpressPageInternalFieldOwners = 'author___authored_wordpress__PAGE___internal___fieldOwners',
  AuthorAuthoredWordpressPageInternalIgnoreType = 'author___authored_wordpress__PAGE___internal___ignoreType',
  AuthorAuthoredWordpressPageInternalMediaType = 'author___authored_wordpress__PAGE___internal___mediaType',
  AuthorAuthoredWordpressPageInternalOwner = 'author___authored_wordpress__PAGE___internal___owner',
  AuthorAuthoredWordpressPageInternalType = 'author___authored_wordpress__PAGE___internal___type',
  AuthorAuthoredWordpressPageWordpressId = 'author___authored_wordpress__PAGE___wordpress_id',
  AuthorAuthoredWordpressPageDate = 'author___authored_wordpress__PAGE___date',
  AuthorAuthoredWordpressPageGuid = 'author___authored_wordpress__PAGE___guid',
  AuthorAuthoredWordpressPageModified = 'author___authored_wordpress__PAGE___modified',
  AuthorAuthoredWordpressPageSlug = 'author___authored_wordpress__PAGE___slug',
  AuthorAuthoredWordpressPageStatus = 'author___authored_wordpress__PAGE___status',
  AuthorAuthoredWordpressPageType = 'author___authored_wordpress__PAGE___type',
  AuthorAuthoredWordpressPageLink = 'author___authored_wordpress__PAGE___link',
  AuthorAuthoredWordpressPageTitle = 'author___authored_wordpress__PAGE___title',
  AuthorAuthoredWordpressPageContent = 'author___authored_wordpress__PAGE___content',
  AuthorAuthoredWordpressPageExcerpt = 'author___authored_wordpress__PAGE___excerpt',
  AuthorAuthoredWordpressPageWordpressParent = 'author___authored_wordpress__PAGE___wordpress_parent',
  AuthorAuthoredWordpressPageMenuOrder = 'author___authored_wordpress__PAGE___menu_order',
  AuthorAuthoredWordpressPageCommentStatus = 'author___authored_wordpress__PAGE___comment_status',
  AuthorAuthoredWordpressPagePingStatus = 'author___authored_wordpress__PAGE___ping_status',
  AuthorAuthoredWordpressPageTemplate = 'author___authored_wordpress__PAGE___template',
  AuthorAuthoredWordpressPageLinksSelf = 'author___authored_wordpress__PAGE____links___self',
  AuthorAuthoredWordpressPageLinksCollection = 'author___authored_wordpress__PAGE____links___collection',
  AuthorAuthoredWordpressPageLinksAbout = 'author___authored_wordpress__PAGE____links___about',
  AuthorAuthoredWordpressPageLinksAuthor = 'author___authored_wordpress__PAGE____links___author',
  AuthorAuthoredWordpressPageLinksReplies = 'author___authored_wordpress__PAGE____links___replies',
  AuthorAuthoredWordpressPageLinksVersionHistory = 'author___authored_wordpress__PAGE____links___version_history',
  AuthorAuthoredWordpressPageLinksPredecessorVersion = 'author___authored_wordpress__PAGE____links___predecessor_version',
  AuthorAuthoredWordpressPageLinksWpAttachment = 'author___authored_wordpress__PAGE____links___wp_attachment',
  AuthorAuthoredWordpressPageLinksCuries = 'author___authored_wordpress__PAGE____links___curies',
  AuthorAuthoredWordpressPageAuthorId = 'author___authored_wordpress__PAGE___author___id',
  AuthorAuthoredWordpressPageAuthorChildren = 'author___authored_wordpress__PAGE___author___children',
  AuthorAuthoredWordpressPageAuthorWordpressId = 'author___authored_wordpress__PAGE___author___wordpress_id',
  AuthorAuthoredWordpressPageAuthorName = 'author___authored_wordpress__PAGE___author___name',
  AuthorAuthoredWordpressPageAuthorUrl = 'author___authored_wordpress__PAGE___author___url',
  AuthorAuthoredWordpressPageAuthorDescription = 'author___authored_wordpress__PAGE___author___description',
  AuthorAuthoredWordpressPageAuthorLink = 'author___authored_wordpress__PAGE___author___link',
  AuthorAuthoredWordpressPageAuthorSlug = 'author___authored_wordpress__PAGE___author___slug',
  AuthorAuthoredWordpressPageAuthorAuthoredWordpressPage = 'author___authored_wordpress__PAGE___author___authored_wordpress__PAGE',
  AuthorAuthoredWordpressPageAuthorAuthoredWordpressWpMedia = 'author___authored_wordpress__PAGE___author___authored_wordpress__wp_media',
  AuthorAuthoredWordpressPageAuthorPath = 'author___authored_wordpress__PAGE___author___path',
  AuthorAuthoredWordpressPageAuthorAuthoredWordpressPost = 'author___authored_wordpress__PAGE___author___authored_wordpress__POST',
  AuthorAuthoredWordpressPagePath = 'author___authored_wordpress__PAGE___path',
  AuthorAuthoredWordpressWpMedia = 'author___authored_wordpress__wp_media',
  AuthorAuthoredWordpressWpMediaId = 'author___authored_wordpress__wp_media___id',
  AuthorAuthoredWordpressWpMediaParentId = 'author___authored_wordpress__wp_media___parent___id',
  AuthorAuthoredWordpressWpMediaParentChildren = 'author___authored_wordpress__wp_media___parent___children',
  AuthorAuthoredWordpressWpMediaChildren = 'author___authored_wordpress__wp_media___children',
  AuthorAuthoredWordpressWpMediaChildrenId = 'author___authored_wordpress__wp_media___children___id',
  AuthorAuthoredWordpressWpMediaChildrenChildren = 'author___authored_wordpress__wp_media___children___children',
  AuthorAuthoredWordpressWpMediaInternalContent = 'author___authored_wordpress__wp_media___internal___content',
  AuthorAuthoredWordpressWpMediaInternalContentDigest = 'author___authored_wordpress__wp_media___internal___contentDigest',
  AuthorAuthoredWordpressWpMediaInternalDescription = 'author___authored_wordpress__wp_media___internal___description',
  AuthorAuthoredWordpressWpMediaInternalFieldOwners = 'author___authored_wordpress__wp_media___internal___fieldOwners',
  AuthorAuthoredWordpressWpMediaInternalIgnoreType = 'author___authored_wordpress__wp_media___internal___ignoreType',
  AuthorAuthoredWordpressWpMediaInternalMediaType = 'author___authored_wordpress__wp_media___internal___mediaType',
  AuthorAuthoredWordpressWpMediaInternalOwner = 'author___authored_wordpress__wp_media___internal___owner',
  AuthorAuthoredWordpressWpMediaInternalType = 'author___authored_wordpress__wp_media___internal___type',
  AuthorAuthoredWordpressWpMediaWordpressId = 'author___authored_wordpress__wp_media___wordpress_id',
  AuthorAuthoredWordpressWpMediaDate = 'author___authored_wordpress__wp_media___date',
  AuthorAuthoredWordpressWpMediaModified = 'author___authored_wordpress__wp_media___modified',
  AuthorAuthoredWordpressWpMediaSlug = 'author___authored_wordpress__wp_media___slug',
  AuthorAuthoredWordpressWpMediaStatus = 'author___authored_wordpress__wp_media___status',
  AuthorAuthoredWordpressWpMediaType = 'author___authored_wordpress__wp_media___type',
  AuthorAuthoredWordpressWpMediaLink = 'author___authored_wordpress__wp_media___link',
  AuthorAuthoredWordpressWpMediaTitle = 'author___authored_wordpress__wp_media___title',
  AuthorAuthoredWordpressWpMediaCommentStatus = 'author___authored_wordpress__wp_media___comment_status',
  AuthorAuthoredWordpressWpMediaPingStatus = 'author___authored_wordpress__wp_media___ping_status',
  AuthorAuthoredWordpressWpMediaTemplate = 'author___authored_wordpress__wp_media___template',
  AuthorAuthoredWordpressWpMediaDescription = 'author___authored_wordpress__wp_media___description',
  AuthorAuthoredWordpressWpMediaCaption = 'author___authored_wordpress__wp_media___caption',
  AuthorAuthoredWordpressWpMediaAltText = 'author___authored_wordpress__wp_media___alt_text',
  AuthorAuthoredWordpressWpMediaMediaType = 'author___authored_wordpress__wp_media___media_type',
  AuthorAuthoredWordpressWpMediaMimeType = 'author___authored_wordpress__wp_media___mime_type',
  AuthorAuthoredWordpressWpMediaMediaDetailsWidth = 'author___authored_wordpress__wp_media___media_details___width',
  AuthorAuthoredWordpressWpMediaMediaDetailsHeight = 'author___authored_wordpress__wp_media___media_details___height',
  AuthorAuthoredWordpressWpMediaMediaDetailsFile = 'author___authored_wordpress__wp_media___media_details___file',
  AuthorAuthoredWordpressWpMediaMediaDetailsOriginalImage = 'author___authored_wordpress__wp_media___media_details___original_image',
  AuthorAuthoredWordpressWpMediaSourceUrl = 'author___authored_wordpress__wp_media___source_url',
  AuthorAuthoredWordpressWpMediaLinksSelf = 'author___authored_wordpress__wp_media____links___self',
  AuthorAuthoredWordpressWpMediaLinksCollection = 'author___authored_wordpress__wp_media____links___collection',
  AuthorAuthoredWordpressWpMediaLinksAbout = 'author___authored_wordpress__wp_media____links___about',
  AuthorAuthoredWordpressWpMediaLinksAuthor = 'author___authored_wordpress__wp_media____links___author',
  AuthorAuthoredWordpressWpMediaLinksReplies = 'author___authored_wordpress__wp_media____links___replies',
  AuthorAuthoredWordpressWpMediaAuthorId = 'author___authored_wordpress__wp_media___author___id',
  AuthorAuthoredWordpressWpMediaAuthorChildren = 'author___authored_wordpress__wp_media___author___children',
  AuthorAuthoredWordpressWpMediaAuthorWordpressId = 'author___authored_wordpress__wp_media___author___wordpress_id',
  AuthorAuthoredWordpressWpMediaAuthorName = 'author___authored_wordpress__wp_media___author___name',
  AuthorAuthoredWordpressWpMediaAuthorUrl = 'author___authored_wordpress__wp_media___author___url',
  AuthorAuthoredWordpressWpMediaAuthorDescription = 'author___authored_wordpress__wp_media___author___description',
  AuthorAuthoredWordpressWpMediaAuthorLink = 'author___authored_wordpress__wp_media___author___link',
  AuthorAuthoredWordpressWpMediaAuthorSlug = 'author___authored_wordpress__wp_media___author___slug',
  AuthorAuthoredWordpressWpMediaAuthorAuthoredWordpressPage = 'author___authored_wordpress__wp_media___author___authored_wordpress__PAGE',
  AuthorAuthoredWordpressWpMediaAuthorAuthoredWordpressWpMedia = 'author___authored_wordpress__wp_media___author___authored_wordpress__wp_media',
  AuthorAuthoredWordpressWpMediaAuthorPath = 'author___authored_wordpress__wp_media___author___path',
  AuthorAuthoredWordpressWpMediaAuthorAuthoredWordpressPost = 'author___authored_wordpress__wp_media___author___authored_wordpress__POST',
  AuthorAuthoredWordpressWpMediaGuidId = 'author___authored_wordpress__wp_media___guid___id',
  AuthorAuthoredWordpressWpMediaGuidChildren = 'author___authored_wordpress__wp_media___guid___children',
  AuthorAuthoredWordpressWpMediaGuidWordpressId = 'author___authored_wordpress__wp_media___guid___wordpress_id',
  AuthorAuthoredWordpressWpMediaGuidDate = 'author___authored_wordpress__wp_media___guid___date',
  AuthorAuthoredWordpressWpMediaGuidModified = 'author___authored_wordpress__wp_media___guid___modified',
  AuthorAuthoredWordpressWpMediaGuidSlug = 'author___authored_wordpress__wp_media___guid___slug',
  AuthorAuthoredWordpressWpMediaGuidStatus = 'author___authored_wordpress__wp_media___guid___status',
  AuthorAuthoredWordpressWpMediaGuidType = 'author___authored_wordpress__wp_media___guid___type',
  AuthorAuthoredWordpressWpMediaGuidLink = 'author___authored_wordpress__wp_media___guid___link',
  AuthorAuthoredWordpressWpMediaGuidTitle = 'author___authored_wordpress__wp_media___guid___title',
  AuthorAuthoredWordpressWpMediaGuidCommentStatus = 'author___authored_wordpress__wp_media___guid___comment_status',
  AuthorAuthoredWordpressWpMediaGuidPingStatus = 'author___authored_wordpress__wp_media___guid___ping_status',
  AuthorAuthoredWordpressWpMediaGuidTemplate = 'author___authored_wordpress__wp_media___guid___template',
  AuthorAuthoredWordpressWpMediaGuidDescription = 'author___authored_wordpress__wp_media___guid___description',
  AuthorAuthoredWordpressWpMediaGuidCaption = 'author___authored_wordpress__wp_media___guid___caption',
  AuthorAuthoredWordpressWpMediaGuidAltText = 'author___authored_wordpress__wp_media___guid___alt_text',
  AuthorAuthoredWordpressWpMediaGuidMediaType = 'author___authored_wordpress__wp_media___guid___media_type',
  AuthorAuthoredWordpressWpMediaGuidMimeType = 'author___authored_wordpress__wp_media___guid___mime_type',
  AuthorAuthoredWordpressWpMediaGuidSourceUrl = 'author___authored_wordpress__wp_media___guid___source_url',
  AuthorAuthoredWordpressWpMediaGuidPath = 'author___authored_wordpress__wp_media___guid___path',
  AuthorAuthoredWordpressWpMediaLocalFileSourceInstanceName = 'author___authored_wordpress__wp_media___localFile___sourceInstanceName',
  AuthorAuthoredWordpressWpMediaLocalFileAbsolutePath = 'author___authored_wordpress__wp_media___localFile___absolutePath',
  AuthorAuthoredWordpressWpMediaLocalFileRelativePath = 'author___authored_wordpress__wp_media___localFile___relativePath',
  AuthorAuthoredWordpressWpMediaLocalFileExtension = 'author___authored_wordpress__wp_media___localFile___extension',
  AuthorAuthoredWordpressWpMediaLocalFileSize = 'author___authored_wordpress__wp_media___localFile___size',
  AuthorAuthoredWordpressWpMediaLocalFilePrettySize = 'author___authored_wordpress__wp_media___localFile___prettySize',
  AuthorAuthoredWordpressWpMediaLocalFileModifiedTime = 'author___authored_wordpress__wp_media___localFile___modifiedTime',
  AuthorAuthoredWordpressWpMediaLocalFileAccessTime = 'author___authored_wordpress__wp_media___localFile___accessTime',
  AuthorAuthoredWordpressWpMediaLocalFileChangeTime = 'author___authored_wordpress__wp_media___localFile___changeTime',
  AuthorAuthoredWordpressWpMediaLocalFileBirthTime = 'author___authored_wordpress__wp_media___localFile___birthTime',
  AuthorAuthoredWordpressWpMediaLocalFileRoot = 'author___authored_wordpress__wp_media___localFile___root',
  AuthorAuthoredWordpressWpMediaLocalFileDir = 'author___authored_wordpress__wp_media___localFile___dir',
  AuthorAuthoredWordpressWpMediaLocalFileBase = 'author___authored_wordpress__wp_media___localFile___base',
  AuthorAuthoredWordpressWpMediaLocalFileExt = 'author___authored_wordpress__wp_media___localFile___ext',
  AuthorAuthoredWordpressWpMediaLocalFileName = 'author___authored_wordpress__wp_media___localFile___name',
  AuthorAuthoredWordpressWpMediaLocalFileRelativeDirectory = 'author___authored_wordpress__wp_media___localFile___relativeDirectory',
  AuthorAuthoredWordpressWpMediaLocalFileDev = 'author___authored_wordpress__wp_media___localFile___dev',
  AuthorAuthoredWordpressWpMediaLocalFileMode = 'author___authored_wordpress__wp_media___localFile___mode',
  AuthorAuthoredWordpressWpMediaLocalFileNlink = 'author___authored_wordpress__wp_media___localFile___nlink',
  AuthorAuthoredWordpressWpMediaLocalFileUid = 'author___authored_wordpress__wp_media___localFile___uid',
  AuthorAuthoredWordpressWpMediaLocalFileGid = 'author___authored_wordpress__wp_media___localFile___gid',
  AuthorAuthoredWordpressWpMediaLocalFileRdev = 'author___authored_wordpress__wp_media___localFile___rdev',
  AuthorAuthoredWordpressWpMediaLocalFileIno = 'author___authored_wordpress__wp_media___localFile___ino',
  AuthorAuthoredWordpressWpMediaLocalFileAtimeMs = 'author___authored_wordpress__wp_media___localFile___atimeMs',
  AuthorAuthoredWordpressWpMediaLocalFileMtimeMs = 'author___authored_wordpress__wp_media___localFile___mtimeMs',
  AuthorAuthoredWordpressWpMediaLocalFileCtimeMs = 'author___authored_wordpress__wp_media___localFile___ctimeMs',
  AuthorAuthoredWordpressWpMediaLocalFileAtime = 'author___authored_wordpress__wp_media___localFile___atime',
  AuthorAuthoredWordpressWpMediaLocalFileMtime = 'author___authored_wordpress__wp_media___localFile___mtime',
  AuthorAuthoredWordpressWpMediaLocalFileCtime = 'author___authored_wordpress__wp_media___localFile___ctime',
  AuthorAuthoredWordpressWpMediaLocalFileBirthtime = 'author___authored_wordpress__wp_media___localFile___birthtime',
  AuthorAuthoredWordpressWpMediaLocalFileBirthtimeMs = 'author___authored_wordpress__wp_media___localFile___birthtimeMs',
  AuthorAuthoredWordpressWpMediaLocalFileBlksize = 'author___authored_wordpress__wp_media___localFile___blksize',
  AuthorAuthoredWordpressWpMediaLocalFileBlocks = 'author___authored_wordpress__wp_media___localFile___blocks',
  AuthorAuthoredWordpressWpMediaLocalFileUrl = 'author___authored_wordpress__wp_media___localFile___url',
  AuthorAuthoredWordpressWpMediaLocalFileId = 'author___authored_wordpress__wp_media___localFile___id',
  AuthorAuthoredWordpressWpMediaLocalFileChildren = 'author___authored_wordpress__wp_media___localFile___children',
  AuthorAuthoredWordpressWpMediaPath = 'author___authored_wordpress__wp_media___path',
  AuthorPath = 'author___path',
  AuthorAuthoredWordpressPost = 'author___authored_wordpress__POST',
  AuthorAuthoredWordpressPostId = 'author___authored_wordpress__POST___id',
  AuthorAuthoredWordpressPostParentId = 'author___authored_wordpress__POST___parent___id',
  AuthorAuthoredWordpressPostParentChildren = 'author___authored_wordpress__POST___parent___children',
  AuthorAuthoredWordpressPostChildren = 'author___authored_wordpress__POST___children',
  AuthorAuthoredWordpressPostChildrenId = 'author___authored_wordpress__POST___children___id',
  AuthorAuthoredWordpressPostChildrenChildren = 'author___authored_wordpress__POST___children___children',
  AuthorAuthoredWordpressPostInternalContent = 'author___authored_wordpress__POST___internal___content',
  AuthorAuthoredWordpressPostInternalContentDigest = 'author___authored_wordpress__POST___internal___contentDigest',
  AuthorAuthoredWordpressPostInternalDescription = 'author___authored_wordpress__POST___internal___description',
  AuthorAuthoredWordpressPostInternalFieldOwners = 'author___authored_wordpress__POST___internal___fieldOwners',
  AuthorAuthoredWordpressPostInternalIgnoreType = 'author___authored_wordpress__POST___internal___ignoreType',
  AuthorAuthoredWordpressPostInternalMediaType = 'author___authored_wordpress__POST___internal___mediaType',
  AuthorAuthoredWordpressPostInternalOwner = 'author___authored_wordpress__POST___internal___owner',
  AuthorAuthoredWordpressPostInternalType = 'author___authored_wordpress__POST___internal___type',
  AuthorAuthoredWordpressPostWordpressId = 'author___authored_wordpress__POST___wordpress_id',
  AuthorAuthoredWordpressPostDate = 'author___authored_wordpress__POST___date',
  AuthorAuthoredWordpressPostGuid = 'author___authored_wordpress__POST___guid',
  AuthorAuthoredWordpressPostModified = 'author___authored_wordpress__POST___modified',
  AuthorAuthoredWordpressPostSlug = 'author___authored_wordpress__POST___slug',
  AuthorAuthoredWordpressPostStatus = 'author___authored_wordpress__POST___status',
  AuthorAuthoredWordpressPostType = 'author___authored_wordpress__POST___type',
  AuthorAuthoredWordpressPostLink = 'author___authored_wordpress__POST___link',
  AuthorAuthoredWordpressPostTitle = 'author___authored_wordpress__POST___title',
  AuthorAuthoredWordpressPostContent = 'author___authored_wordpress__POST___content',
  AuthorAuthoredWordpressPostExcerpt = 'author___authored_wordpress__POST___excerpt',
  AuthorAuthoredWordpressPostCommentStatus = 'author___authored_wordpress__POST___comment_status',
  AuthorAuthoredWordpressPostPingStatus = 'author___authored_wordpress__POST___ping_status',
  AuthorAuthoredWordpressPostSticky = 'author___authored_wordpress__POST___sticky',
  AuthorAuthoredWordpressPostTemplate = 'author___authored_wordpress__POST___template',
  AuthorAuthoredWordpressPostFormat = 'author___authored_wordpress__POST___format',
  AuthorAuthoredWordpressPostLinksSelf = 'author___authored_wordpress__POST____links___self',
  AuthorAuthoredWordpressPostLinksCollection = 'author___authored_wordpress__POST____links___collection',
  AuthorAuthoredWordpressPostLinksAbout = 'author___authored_wordpress__POST____links___about',
  AuthorAuthoredWordpressPostLinksAuthor = 'author___authored_wordpress__POST____links___author',
  AuthorAuthoredWordpressPostLinksReplies = 'author___authored_wordpress__POST____links___replies',
  AuthorAuthoredWordpressPostLinksVersionHistory = 'author___authored_wordpress__POST____links___version_history',
  AuthorAuthoredWordpressPostLinksPredecessorVersion = 'author___authored_wordpress__POST____links___predecessor_version',
  AuthorAuthoredWordpressPostLinksWpFeaturedmedia = 'author___authored_wordpress__POST____links___wp_featuredmedia',
  AuthorAuthoredWordpressPostLinksWpAttachment = 'author___authored_wordpress__POST____links___wp_attachment',
  AuthorAuthoredWordpressPostLinksWpTerm = 'author___authored_wordpress__POST____links___wp_term',
  AuthorAuthoredWordpressPostLinksCuries = 'author___authored_wordpress__POST____links___curies',
  AuthorAuthoredWordpressPostAuthorId = 'author___authored_wordpress__POST___author___id',
  AuthorAuthoredWordpressPostAuthorChildren = 'author___authored_wordpress__POST___author___children',
  AuthorAuthoredWordpressPostAuthorWordpressId = 'author___authored_wordpress__POST___author___wordpress_id',
  AuthorAuthoredWordpressPostAuthorName = 'author___authored_wordpress__POST___author___name',
  AuthorAuthoredWordpressPostAuthorUrl = 'author___authored_wordpress__POST___author___url',
  AuthorAuthoredWordpressPostAuthorDescription = 'author___authored_wordpress__POST___author___description',
  AuthorAuthoredWordpressPostAuthorLink = 'author___authored_wordpress__POST___author___link',
  AuthorAuthoredWordpressPostAuthorSlug = 'author___authored_wordpress__POST___author___slug',
  AuthorAuthoredWordpressPostAuthorAuthoredWordpressPage = 'author___authored_wordpress__POST___author___authored_wordpress__PAGE',
  AuthorAuthoredWordpressPostAuthorAuthoredWordpressWpMedia = 'author___authored_wordpress__POST___author___authored_wordpress__wp_media',
  AuthorAuthoredWordpressPostAuthorPath = 'author___authored_wordpress__POST___author___path',
  AuthorAuthoredWordpressPostAuthorAuthoredWordpressPost = 'author___authored_wordpress__POST___author___authored_wordpress__POST',
  AuthorAuthoredWordpressPostCategories = 'author___authored_wordpress__POST___categories',
  AuthorAuthoredWordpressPostCategoriesId = 'author___authored_wordpress__POST___categories___id',
  AuthorAuthoredWordpressPostCategoriesChildren = 'author___authored_wordpress__POST___categories___children',
  AuthorAuthoredWordpressPostCategoriesWordpressId = 'author___authored_wordpress__POST___categories___wordpress_id',
  AuthorAuthoredWordpressPostCategoriesCount = 'author___authored_wordpress__POST___categories___count',
  AuthorAuthoredWordpressPostCategoriesDescription = 'author___authored_wordpress__POST___categories___description',
  AuthorAuthoredWordpressPostCategoriesLink = 'author___authored_wordpress__POST___categories___link',
  AuthorAuthoredWordpressPostCategoriesName = 'author___authored_wordpress__POST___categories___name',
  AuthorAuthoredWordpressPostCategoriesSlug = 'author___authored_wordpress__POST___categories___slug',
  AuthorAuthoredWordpressPostCategoriesWordpressParent = 'author___authored_wordpress__POST___categories___wordpress_parent',
  AuthorAuthoredWordpressPostCategoriesPath = 'author___authored_wordpress__POST___categories___path',
  AuthorAuthoredWordpressPostFeaturedMediaId = 'author___authored_wordpress__POST___featured_media___id',
  AuthorAuthoredWordpressPostFeaturedMediaChildren = 'author___authored_wordpress__POST___featured_media___children',
  AuthorAuthoredWordpressPostFeaturedMediaWordpressId = 'author___authored_wordpress__POST___featured_media___wordpress_id',
  AuthorAuthoredWordpressPostFeaturedMediaDate = 'author___authored_wordpress__POST___featured_media___date',
  AuthorAuthoredWordpressPostFeaturedMediaModified = 'author___authored_wordpress__POST___featured_media___modified',
  AuthorAuthoredWordpressPostFeaturedMediaSlug = 'author___authored_wordpress__POST___featured_media___slug',
  AuthorAuthoredWordpressPostFeaturedMediaStatus = 'author___authored_wordpress__POST___featured_media___status',
  AuthorAuthoredWordpressPostFeaturedMediaType = 'author___authored_wordpress__POST___featured_media___type',
  AuthorAuthoredWordpressPostFeaturedMediaLink = 'author___authored_wordpress__POST___featured_media___link',
  AuthorAuthoredWordpressPostFeaturedMediaTitle = 'author___authored_wordpress__POST___featured_media___title',
  AuthorAuthoredWordpressPostFeaturedMediaCommentStatus = 'author___authored_wordpress__POST___featured_media___comment_status',
  AuthorAuthoredWordpressPostFeaturedMediaPingStatus = 'author___authored_wordpress__POST___featured_media___ping_status',
  AuthorAuthoredWordpressPostFeaturedMediaTemplate = 'author___authored_wordpress__POST___featured_media___template',
  AuthorAuthoredWordpressPostFeaturedMediaDescription = 'author___authored_wordpress__POST___featured_media___description',
  AuthorAuthoredWordpressPostFeaturedMediaCaption = 'author___authored_wordpress__POST___featured_media___caption',
  AuthorAuthoredWordpressPostFeaturedMediaAltText = 'author___authored_wordpress__POST___featured_media___alt_text',
  AuthorAuthoredWordpressPostFeaturedMediaMediaType = 'author___authored_wordpress__POST___featured_media___media_type',
  AuthorAuthoredWordpressPostFeaturedMediaMimeType = 'author___authored_wordpress__POST___featured_media___mime_type',
  AuthorAuthoredWordpressPostFeaturedMediaSourceUrl = 'author___authored_wordpress__POST___featured_media___source_url',
  AuthorAuthoredWordpressPostFeaturedMediaPath = 'author___authored_wordpress__POST___featured_media___path',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlId = 'author___authored_wordpress__POST___jetpack_featured_media_url___id',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlChildren = 'author___authored_wordpress__POST___jetpack_featured_media_url___children',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlWordpressId = 'author___authored_wordpress__POST___jetpack_featured_media_url___wordpress_id',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlDate = 'author___authored_wordpress__POST___jetpack_featured_media_url___date',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlModified = 'author___authored_wordpress__POST___jetpack_featured_media_url___modified',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlSlug = 'author___authored_wordpress__POST___jetpack_featured_media_url___slug',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlStatus = 'author___authored_wordpress__POST___jetpack_featured_media_url___status',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlType = 'author___authored_wordpress__POST___jetpack_featured_media_url___type',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlLink = 'author___authored_wordpress__POST___jetpack_featured_media_url___link',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlTitle = 'author___authored_wordpress__POST___jetpack_featured_media_url___title',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlCommentStatus = 'author___authored_wordpress__POST___jetpack_featured_media_url___comment_status',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlPingStatus = 'author___authored_wordpress__POST___jetpack_featured_media_url___ping_status',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlTemplate = 'author___authored_wordpress__POST___jetpack_featured_media_url___template',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlDescription = 'author___authored_wordpress__POST___jetpack_featured_media_url___description',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlCaption = 'author___authored_wordpress__POST___jetpack_featured_media_url___caption',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlAltText = 'author___authored_wordpress__POST___jetpack_featured_media_url___alt_text',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlMediaType = 'author___authored_wordpress__POST___jetpack_featured_media_url___media_type',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlMimeType = 'author___authored_wordpress__POST___jetpack_featured_media_url___mime_type',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlSourceUrl = 'author___authored_wordpress__POST___jetpack_featured_media_url___source_url',
  AuthorAuthoredWordpressPostJetpackFeaturedMediaUrlPath = 'author___authored_wordpress__POST___jetpack_featured_media_url___path',
  AuthorAuthoredWordpressPostPath = 'author___authored_wordpress__POST___path',
  AuthorAuthoredWordpressPostTags = 'author___authored_wordpress__POST___tags',
  AuthorAuthoredWordpressPostTagsId = 'author___authored_wordpress__POST___tags___id',
  AuthorAuthoredWordpressPostTagsChildren = 'author___authored_wordpress__POST___tags___children',
  AuthorAuthoredWordpressPostTagsWordpressId = 'author___authored_wordpress__POST___tags___wordpress_id',
  AuthorAuthoredWordpressPostTagsCount = 'author___authored_wordpress__POST___tags___count',
  AuthorAuthoredWordpressPostTagsDescription = 'author___authored_wordpress__POST___tags___description',
  AuthorAuthoredWordpressPostTagsLink = 'author___authored_wordpress__POST___tags___link',
  AuthorAuthoredWordpressPostTagsName = 'author___authored_wordpress__POST___tags___name',
  AuthorAuthoredWordpressPostTagsSlug = 'author___authored_wordpress__POST___tags___slug',
  AuthorAuthoredWordpressPostTagsPath = 'author___authored_wordpress__POST___tags___path',
  GuidId = 'guid___id',
  GuidParentId = 'guid___parent___id',
  GuidParentParentId = 'guid___parent___parent___id',
  GuidParentParentChildren = 'guid___parent___parent___children',
  GuidParentChildren = 'guid___parent___children',
  GuidParentChildrenId = 'guid___parent___children___id',
  GuidParentChildrenChildren = 'guid___parent___children___children',
  GuidParentInternalContent = 'guid___parent___internal___content',
  GuidParentInternalContentDigest = 'guid___parent___internal___contentDigest',
  GuidParentInternalDescription = 'guid___parent___internal___description',
  GuidParentInternalFieldOwners = 'guid___parent___internal___fieldOwners',
  GuidParentInternalIgnoreType = 'guid___parent___internal___ignoreType',
  GuidParentInternalMediaType = 'guid___parent___internal___mediaType',
  GuidParentInternalOwner = 'guid___parent___internal___owner',
  GuidParentInternalType = 'guid___parent___internal___type',
  GuidChildren = 'guid___children',
  GuidChildrenId = 'guid___children___id',
  GuidChildrenParentId = 'guid___children___parent___id',
  GuidChildrenParentChildren = 'guid___children___parent___children',
  GuidChildrenChildren = 'guid___children___children',
  GuidChildrenChildrenId = 'guid___children___children___id',
  GuidChildrenChildrenChildren = 'guid___children___children___children',
  GuidChildrenInternalContent = 'guid___children___internal___content',
  GuidChildrenInternalContentDigest = 'guid___children___internal___contentDigest',
  GuidChildrenInternalDescription = 'guid___children___internal___description',
  GuidChildrenInternalFieldOwners = 'guid___children___internal___fieldOwners',
  GuidChildrenInternalIgnoreType = 'guid___children___internal___ignoreType',
  GuidChildrenInternalMediaType = 'guid___children___internal___mediaType',
  GuidChildrenInternalOwner = 'guid___children___internal___owner',
  GuidChildrenInternalType = 'guid___children___internal___type',
  GuidInternalContent = 'guid___internal___content',
  GuidInternalContentDigest = 'guid___internal___contentDigest',
  GuidInternalDescription = 'guid___internal___description',
  GuidInternalFieldOwners = 'guid___internal___fieldOwners',
  GuidInternalIgnoreType = 'guid___internal___ignoreType',
  GuidInternalMediaType = 'guid___internal___mediaType',
  GuidInternalOwner = 'guid___internal___owner',
  GuidInternalType = 'guid___internal___type',
  GuidWordpressId = 'guid___wordpress_id',
  GuidDate = 'guid___date',
  GuidModified = 'guid___modified',
  GuidSlug = 'guid___slug',
  GuidStatus = 'guid___status',
  GuidType = 'guid___type',
  GuidLink = 'guid___link',
  GuidTitle = 'guid___title',
  GuidCommentStatus = 'guid___comment_status',
  GuidPingStatus = 'guid___ping_status',
  GuidTemplate = 'guid___template',
  GuidDescription = 'guid___description',
  GuidCaption = 'guid___caption',
  GuidAltText = 'guid___alt_text',
  GuidMediaType = 'guid___media_type',
  GuidMimeType = 'guid___mime_type',
  GuidMediaDetailsWidth = 'guid___media_details___width',
  GuidMediaDetailsHeight = 'guid___media_details___height',
  GuidMediaDetailsFile = 'guid___media_details___file',
  GuidMediaDetailsImageMetaAperture = 'guid___media_details___image_meta___aperture',
  GuidMediaDetailsImageMetaCredit = 'guid___media_details___image_meta___credit',
  GuidMediaDetailsImageMetaCamera = 'guid___media_details___image_meta___camera',
  GuidMediaDetailsImageMetaCaption = 'guid___media_details___image_meta___caption',
  GuidMediaDetailsImageMetaCreatedTimestamp = 'guid___media_details___image_meta___created_timestamp',
  GuidMediaDetailsImageMetaCopyright = 'guid___media_details___image_meta___copyright',
  GuidMediaDetailsImageMetaFocalLength = 'guid___media_details___image_meta___focal_length',
  GuidMediaDetailsImageMetaIso = 'guid___media_details___image_meta___iso',
  GuidMediaDetailsImageMetaShutterSpeed = 'guid___media_details___image_meta___shutter_speed',
  GuidMediaDetailsImageMetaTitle = 'guid___media_details___image_meta___title',
  GuidMediaDetailsImageMetaOrientation = 'guid___media_details___image_meta___orientation',
  GuidMediaDetailsOriginalImage = 'guid___media_details___original_image',
  GuidSourceUrl = 'guid___source_url',
  GuidLinksSelf = 'guid____links___self',
  GuidLinksSelfHref = 'guid____links___self___href',
  GuidLinksCollection = 'guid____links___collection',
  GuidLinksCollectionHref = 'guid____links___collection___href',
  GuidLinksAbout = 'guid____links___about',
  GuidLinksAboutHref = 'guid____links___about___href',
  GuidLinksAuthor = 'guid____links___author',
  GuidLinksAuthorEmbeddable = 'guid____links___author___embeddable',
  GuidLinksAuthorHref = 'guid____links___author___href',
  GuidLinksReplies = 'guid____links___replies',
  GuidLinksRepliesEmbeddable = 'guid____links___replies___embeddable',
  GuidLinksRepliesHref = 'guid____links___replies___href',
  GuidAuthorId = 'guid___author___id',
  GuidAuthorParentId = 'guid___author___parent___id',
  GuidAuthorParentChildren = 'guid___author___parent___children',
  GuidAuthorChildren = 'guid___author___children',
  GuidAuthorChildrenId = 'guid___author___children___id',
  GuidAuthorChildrenChildren = 'guid___author___children___children',
  GuidAuthorInternalContent = 'guid___author___internal___content',
  GuidAuthorInternalContentDigest = 'guid___author___internal___contentDigest',
  GuidAuthorInternalDescription = 'guid___author___internal___description',
  GuidAuthorInternalFieldOwners = 'guid___author___internal___fieldOwners',
  GuidAuthorInternalIgnoreType = 'guid___author___internal___ignoreType',
  GuidAuthorInternalMediaType = 'guid___author___internal___mediaType',
  GuidAuthorInternalOwner = 'guid___author___internal___owner',
  GuidAuthorInternalType = 'guid___author___internal___type',
  GuidAuthorWordpressId = 'guid___author___wordpress_id',
  GuidAuthorName = 'guid___author___name',
  GuidAuthorUrl = 'guid___author___url',
  GuidAuthorDescription = 'guid___author___description',
  GuidAuthorLink = 'guid___author___link',
  GuidAuthorSlug = 'guid___author___slug',
  GuidAuthorAvatarUrlsWordpress_24 = 'guid___author___avatar_urls___wordpress_24',
  GuidAuthorAvatarUrlsWordpress_48 = 'guid___author___avatar_urls___wordpress_48',
  GuidAuthorAvatarUrlsWordpress_96 = 'guid___author___avatar_urls___wordpress_96',
  GuidAuthorLinksSelf = 'guid___author____links___self',
  GuidAuthorLinksCollection = 'guid___author____links___collection',
  GuidAuthorAuthoredWordpressPage = 'guid___author___authored_wordpress__PAGE',
  GuidAuthorAuthoredWordpressPageId = 'guid___author___authored_wordpress__PAGE___id',
  GuidAuthorAuthoredWordpressPageChildren = 'guid___author___authored_wordpress__PAGE___children',
  GuidAuthorAuthoredWordpressPageWordpressId = 'guid___author___authored_wordpress__PAGE___wordpress_id',
  GuidAuthorAuthoredWordpressPageDate = 'guid___author___authored_wordpress__PAGE___date',
  GuidAuthorAuthoredWordpressPageGuid = 'guid___author___authored_wordpress__PAGE___guid',
  GuidAuthorAuthoredWordpressPageModified = 'guid___author___authored_wordpress__PAGE___modified',
  GuidAuthorAuthoredWordpressPageSlug = 'guid___author___authored_wordpress__PAGE___slug',
  GuidAuthorAuthoredWordpressPageStatus = 'guid___author___authored_wordpress__PAGE___status',
  GuidAuthorAuthoredWordpressPageType = 'guid___author___authored_wordpress__PAGE___type',
  GuidAuthorAuthoredWordpressPageLink = 'guid___author___authored_wordpress__PAGE___link',
  GuidAuthorAuthoredWordpressPageTitle = 'guid___author___authored_wordpress__PAGE___title',
  GuidAuthorAuthoredWordpressPageContent = 'guid___author___authored_wordpress__PAGE___content',
  GuidAuthorAuthoredWordpressPageExcerpt = 'guid___author___authored_wordpress__PAGE___excerpt',
  GuidAuthorAuthoredWordpressPageWordpressParent = 'guid___author___authored_wordpress__PAGE___wordpress_parent',
  GuidAuthorAuthoredWordpressPageMenuOrder = 'guid___author___authored_wordpress__PAGE___menu_order',
  GuidAuthorAuthoredWordpressPageCommentStatus = 'guid___author___authored_wordpress__PAGE___comment_status',
  GuidAuthorAuthoredWordpressPagePingStatus = 'guid___author___authored_wordpress__PAGE___ping_status',
  GuidAuthorAuthoredWordpressPageTemplate = 'guid___author___authored_wordpress__PAGE___template',
  GuidAuthorAuthoredWordpressPagePath = 'guid___author___authored_wordpress__PAGE___path',
  GuidAuthorAuthoredWordpressWpMedia = 'guid___author___authored_wordpress__wp_media',
  GuidAuthorAuthoredWordpressWpMediaId = 'guid___author___authored_wordpress__wp_media___id',
  GuidAuthorAuthoredWordpressWpMediaChildren = 'guid___author___authored_wordpress__wp_media___children',
  GuidAuthorAuthoredWordpressWpMediaWordpressId = 'guid___author___authored_wordpress__wp_media___wordpress_id',
  GuidAuthorAuthoredWordpressWpMediaDate = 'guid___author___authored_wordpress__wp_media___date',
  GuidAuthorAuthoredWordpressWpMediaModified = 'guid___author___authored_wordpress__wp_media___modified',
  GuidAuthorAuthoredWordpressWpMediaSlug = 'guid___author___authored_wordpress__wp_media___slug',
  GuidAuthorAuthoredWordpressWpMediaStatus = 'guid___author___authored_wordpress__wp_media___status',
  GuidAuthorAuthoredWordpressWpMediaType = 'guid___author___authored_wordpress__wp_media___type',
  GuidAuthorAuthoredWordpressWpMediaLink = 'guid___author___authored_wordpress__wp_media___link',
  GuidAuthorAuthoredWordpressWpMediaTitle = 'guid___author___authored_wordpress__wp_media___title',
  GuidAuthorAuthoredWordpressWpMediaCommentStatus = 'guid___author___authored_wordpress__wp_media___comment_status',
  GuidAuthorAuthoredWordpressWpMediaPingStatus = 'guid___author___authored_wordpress__wp_media___ping_status',
  GuidAuthorAuthoredWordpressWpMediaTemplate = 'guid___author___authored_wordpress__wp_media___template',
  GuidAuthorAuthoredWordpressWpMediaDescription = 'guid___author___authored_wordpress__wp_media___description',
  GuidAuthorAuthoredWordpressWpMediaCaption = 'guid___author___authored_wordpress__wp_media___caption',
  GuidAuthorAuthoredWordpressWpMediaAltText = 'guid___author___authored_wordpress__wp_media___alt_text',
  GuidAuthorAuthoredWordpressWpMediaMediaType = 'guid___author___authored_wordpress__wp_media___media_type',
  GuidAuthorAuthoredWordpressWpMediaMimeType = 'guid___author___authored_wordpress__wp_media___mime_type',
  GuidAuthorAuthoredWordpressWpMediaSourceUrl = 'guid___author___authored_wordpress__wp_media___source_url',
  GuidAuthorAuthoredWordpressWpMediaPath = 'guid___author___authored_wordpress__wp_media___path',
  GuidAuthorPath = 'guid___author___path',
  GuidAuthorAuthoredWordpressPost = 'guid___author___authored_wordpress__POST',
  GuidAuthorAuthoredWordpressPostId = 'guid___author___authored_wordpress__POST___id',
  GuidAuthorAuthoredWordpressPostChildren = 'guid___author___authored_wordpress__POST___children',
  GuidAuthorAuthoredWordpressPostWordpressId = 'guid___author___authored_wordpress__POST___wordpress_id',
  GuidAuthorAuthoredWordpressPostDate = 'guid___author___authored_wordpress__POST___date',
  GuidAuthorAuthoredWordpressPostGuid = 'guid___author___authored_wordpress__POST___guid',
  GuidAuthorAuthoredWordpressPostModified = 'guid___author___authored_wordpress__POST___modified',
  GuidAuthorAuthoredWordpressPostSlug = 'guid___author___authored_wordpress__POST___slug',
  GuidAuthorAuthoredWordpressPostStatus = 'guid___author___authored_wordpress__POST___status',
  GuidAuthorAuthoredWordpressPostType = 'guid___author___authored_wordpress__POST___type',
  GuidAuthorAuthoredWordpressPostLink = 'guid___author___authored_wordpress__POST___link',
  GuidAuthorAuthoredWordpressPostTitle = 'guid___author___authored_wordpress__POST___title',
  GuidAuthorAuthoredWordpressPostContent = 'guid___author___authored_wordpress__POST___content',
  GuidAuthorAuthoredWordpressPostExcerpt = 'guid___author___authored_wordpress__POST___excerpt',
  GuidAuthorAuthoredWordpressPostCommentStatus = 'guid___author___authored_wordpress__POST___comment_status',
  GuidAuthorAuthoredWordpressPostPingStatus = 'guid___author___authored_wordpress__POST___ping_status',
  GuidAuthorAuthoredWordpressPostSticky = 'guid___author___authored_wordpress__POST___sticky',
  GuidAuthorAuthoredWordpressPostTemplate = 'guid___author___authored_wordpress__POST___template',
  GuidAuthorAuthoredWordpressPostFormat = 'guid___author___authored_wordpress__POST___format',
  GuidAuthorAuthoredWordpressPostCategories = 'guid___author___authored_wordpress__POST___categories',
  GuidAuthorAuthoredWordpressPostPath = 'guid___author___authored_wordpress__POST___path',
  GuidAuthorAuthoredWordpressPostTags = 'guid___author___authored_wordpress__POST___tags',
  GuidGuidId = 'guid___guid___id',
  GuidGuidParentId = 'guid___guid___parent___id',
  GuidGuidParentChildren = 'guid___guid___parent___children',
  GuidGuidChildren = 'guid___guid___children',
  GuidGuidChildrenId = 'guid___guid___children___id',
  GuidGuidChildrenChildren = 'guid___guid___children___children',
  GuidGuidInternalContent = 'guid___guid___internal___content',
  GuidGuidInternalContentDigest = 'guid___guid___internal___contentDigest',
  GuidGuidInternalDescription = 'guid___guid___internal___description',
  GuidGuidInternalFieldOwners = 'guid___guid___internal___fieldOwners',
  GuidGuidInternalIgnoreType = 'guid___guid___internal___ignoreType',
  GuidGuidInternalMediaType = 'guid___guid___internal___mediaType',
  GuidGuidInternalOwner = 'guid___guid___internal___owner',
  GuidGuidInternalType = 'guid___guid___internal___type',
  GuidGuidWordpressId = 'guid___guid___wordpress_id',
  GuidGuidDate = 'guid___guid___date',
  GuidGuidModified = 'guid___guid___modified',
  GuidGuidSlug = 'guid___guid___slug',
  GuidGuidStatus = 'guid___guid___status',
  GuidGuidType = 'guid___guid___type',
  GuidGuidLink = 'guid___guid___link',
  GuidGuidTitle = 'guid___guid___title',
  GuidGuidCommentStatus = 'guid___guid___comment_status',
  GuidGuidPingStatus = 'guid___guid___ping_status',
  GuidGuidTemplate = 'guid___guid___template',
  GuidGuidDescription = 'guid___guid___description',
  GuidGuidCaption = 'guid___guid___caption',
  GuidGuidAltText = 'guid___guid___alt_text',
  GuidGuidMediaType = 'guid___guid___media_type',
  GuidGuidMimeType = 'guid___guid___mime_type',
  GuidGuidMediaDetailsWidth = 'guid___guid___media_details___width',
  GuidGuidMediaDetailsHeight = 'guid___guid___media_details___height',
  GuidGuidMediaDetailsFile = 'guid___guid___media_details___file',
  GuidGuidMediaDetailsOriginalImage = 'guid___guid___media_details___original_image',
  GuidGuidSourceUrl = 'guid___guid___source_url',
  GuidGuidLinksSelf = 'guid___guid____links___self',
  GuidGuidLinksCollection = 'guid___guid____links___collection',
  GuidGuidLinksAbout = 'guid___guid____links___about',
  GuidGuidLinksAuthor = 'guid___guid____links___author',
  GuidGuidLinksReplies = 'guid___guid____links___replies',
  GuidGuidAuthorId = 'guid___guid___author___id',
  GuidGuidAuthorChildren = 'guid___guid___author___children',
  GuidGuidAuthorWordpressId = 'guid___guid___author___wordpress_id',
  GuidGuidAuthorName = 'guid___guid___author___name',
  GuidGuidAuthorUrl = 'guid___guid___author___url',
  GuidGuidAuthorDescription = 'guid___guid___author___description',
  GuidGuidAuthorLink = 'guid___guid___author___link',
  GuidGuidAuthorSlug = 'guid___guid___author___slug',
  GuidGuidAuthorAuthoredWordpressPage = 'guid___guid___author___authored_wordpress__PAGE',
  GuidGuidAuthorAuthoredWordpressWpMedia = 'guid___guid___author___authored_wordpress__wp_media',
  GuidGuidAuthorPath = 'guid___guid___author___path',
  GuidGuidAuthorAuthoredWordpressPost = 'guid___guid___author___authored_wordpress__POST',
  GuidGuidGuidId = 'guid___guid___guid___id',
  GuidGuidGuidChildren = 'guid___guid___guid___children',
  GuidGuidGuidWordpressId = 'guid___guid___guid___wordpress_id',
  GuidGuidGuidDate = 'guid___guid___guid___date',
  GuidGuidGuidModified = 'guid___guid___guid___modified',
  GuidGuidGuidSlug = 'guid___guid___guid___slug',
  GuidGuidGuidStatus = 'guid___guid___guid___status',
  GuidGuidGuidType = 'guid___guid___guid___type',
  GuidGuidGuidLink = 'guid___guid___guid___link',
  GuidGuidGuidTitle = 'guid___guid___guid___title',
  GuidGuidGuidCommentStatus = 'guid___guid___guid___comment_status',
  GuidGuidGuidPingStatus = 'guid___guid___guid___ping_status',
  GuidGuidGuidTemplate = 'guid___guid___guid___template',
  GuidGuidGuidDescription = 'guid___guid___guid___description',
  GuidGuidGuidCaption = 'guid___guid___guid___caption',
  GuidGuidGuidAltText = 'guid___guid___guid___alt_text',
  GuidGuidGuidMediaType = 'guid___guid___guid___media_type',
  GuidGuidGuidMimeType = 'guid___guid___guid___mime_type',
  GuidGuidGuidSourceUrl = 'guid___guid___guid___source_url',
  GuidGuidGuidPath = 'guid___guid___guid___path',
  GuidGuidLocalFileSourceInstanceName = 'guid___guid___localFile___sourceInstanceName',
  GuidGuidLocalFileAbsolutePath = 'guid___guid___localFile___absolutePath',
  GuidGuidLocalFileRelativePath = 'guid___guid___localFile___relativePath',
  GuidGuidLocalFileExtension = 'guid___guid___localFile___extension',
  GuidGuidLocalFileSize = 'guid___guid___localFile___size',
  GuidGuidLocalFilePrettySize = 'guid___guid___localFile___prettySize',
  GuidGuidLocalFileModifiedTime = 'guid___guid___localFile___modifiedTime',
  GuidGuidLocalFileAccessTime = 'guid___guid___localFile___accessTime',
  GuidGuidLocalFileChangeTime = 'guid___guid___localFile___changeTime',
  GuidGuidLocalFileBirthTime = 'guid___guid___localFile___birthTime',
  GuidGuidLocalFileRoot = 'guid___guid___localFile___root',
  GuidGuidLocalFileDir = 'guid___guid___localFile___dir',
  GuidGuidLocalFileBase = 'guid___guid___localFile___base',
  GuidGuidLocalFileExt = 'guid___guid___localFile___ext',
  GuidGuidLocalFileName = 'guid___guid___localFile___name',
  GuidGuidLocalFileRelativeDirectory = 'guid___guid___localFile___relativeDirectory',
  GuidGuidLocalFileDev = 'guid___guid___localFile___dev',
  GuidGuidLocalFileMode = 'guid___guid___localFile___mode',
  GuidGuidLocalFileNlink = 'guid___guid___localFile___nlink',
  GuidGuidLocalFileUid = 'guid___guid___localFile___uid',
  GuidGuidLocalFileGid = 'guid___guid___localFile___gid',
  GuidGuidLocalFileRdev = 'guid___guid___localFile___rdev',
  GuidGuidLocalFileIno = 'guid___guid___localFile___ino',
  GuidGuidLocalFileAtimeMs = 'guid___guid___localFile___atimeMs',
  GuidGuidLocalFileMtimeMs = 'guid___guid___localFile___mtimeMs',
  GuidGuidLocalFileCtimeMs = 'guid___guid___localFile___ctimeMs',
  GuidGuidLocalFileAtime = 'guid___guid___localFile___atime',
  GuidGuidLocalFileMtime = 'guid___guid___localFile___mtime',
  GuidGuidLocalFileCtime = 'guid___guid___localFile___ctime',
  GuidGuidLocalFileBirthtime = 'guid___guid___localFile___birthtime',
  GuidGuidLocalFileBirthtimeMs = 'guid___guid___localFile___birthtimeMs',
  GuidGuidLocalFileBlksize = 'guid___guid___localFile___blksize',
  GuidGuidLocalFileBlocks = 'guid___guid___localFile___blocks',
  GuidGuidLocalFileUrl = 'guid___guid___localFile___url',
  GuidGuidLocalFileId = 'guid___guid___localFile___id',
  GuidGuidLocalFileChildren = 'guid___guid___localFile___children',
  GuidGuidPath = 'guid___guid___path',
  GuidLocalFileSourceInstanceName = 'guid___localFile___sourceInstanceName',
  GuidLocalFileAbsolutePath = 'guid___localFile___absolutePath',
  GuidLocalFileRelativePath = 'guid___localFile___relativePath',
  GuidLocalFileExtension = 'guid___localFile___extension',
  GuidLocalFileSize = 'guid___localFile___size',
  GuidLocalFilePrettySize = 'guid___localFile___prettySize',
  GuidLocalFileModifiedTime = 'guid___localFile___modifiedTime',
  GuidLocalFileAccessTime = 'guid___localFile___accessTime',
  GuidLocalFileChangeTime = 'guid___localFile___changeTime',
  GuidLocalFileBirthTime = 'guid___localFile___birthTime',
  GuidLocalFileRoot = 'guid___localFile___root',
  GuidLocalFileDir = 'guid___localFile___dir',
  GuidLocalFileBase = 'guid___localFile___base',
  GuidLocalFileExt = 'guid___localFile___ext',
  GuidLocalFileName = 'guid___localFile___name',
  GuidLocalFileRelativeDirectory = 'guid___localFile___relativeDirectory',
  GuidLocalFileDev = 'guid___localFile___dev',
  GuidLocalFileMode = 'guid___localFile___mode',
  GuidLocalFileNlink = 'guid___localFile___nlink',
  GuidLocalFileUid = 'guid___localFile___uid',
  GuidLocalFileGid = 'guid___localFile___gid',
  GuidLocalFileRdev = 'guid___localFile___rdev',
  GuidLocalFileIno = 'guid___localFile___ino',
  GuidLocalFileAtimeMs = 'guid___localFile___atimeMs',
  GuidLocalFileMtimeMs = 'guid___localFile___mtimeMs',
  GuidLocalFileCtimeMs = 'guid___localFile___ctimeMs',
  GuidLocalFileAtime = 'guid___localFile___atime',
  GuidLocalFileMtime = 'guid___localFile___mtime',
  GuidLocalFileCtime = 'guid___localFile___ctime',
  GuidLocalFileBirthtime = 'guid___localFile___birthtime',
  GuidLocalFileBirthtimeMs = 'guid___localFile___birthtimeMs',
  GuidLocalFileBlksize = 'guid___localFile___blksize',
  GuidLocalFileBlocks = 'guid___localFile___blocks',
  GuidLocalFileUrl = 'guid___localFile___url',
  GuidLocalFileChildImageSharpId = 'guid___localFile___childImageSharp___id',
  GuidLocalFileChildImageSharpChildren = 'guid___localFile___childImageSharp___children',
  GuidLocalFileId = 'guid___localFile___id',
  GuidLocalFileParentId = 'guid___localFile___parent___id',
  GuidLocalFileParentChildren = 'guid___localFile___parent___children',
  GuidLocalFileChildren = 'guid___localFile___children',
  GuidLocalFileChildrenId = 'guid___localFile___children___id',
  GuidLocalFileChildrenChildren = 'guid___localFile___children___children',
  GuidLocalFileInternalContent = 'guid___localFile___internal___content',
  GuidLocalFileInternalContentDigest = 'guid___localFile___internal___contentDigest',
  GuidLocalFileInternalDescription = 'guid___localFile___internal___description',
  GuidLocalFileInternalFieldOwners = 'guid___localFile___internal___fieldOwners',
  GuidLocalFileInternalIgnoreType = 'guid___localFile___internal___ignoreType',
  GuidLocalFileInternalMediaType = 'guid___localFile___internal___mediaType',
  GuidLocalFileInternalOwner = 'guid___localFile___internal___owner',
  GuidLocalFileInternalType = 'guid___localFile___internal___type',
  GuidPath = 'guid___path',
  LocalFileSourceInstanceName = 'localFile___sourceInstanceName',
  LocalFileAbsolutePath = 'localFile___absolutePath',
  LocalFileRelativePath = 'localFile___relativePath',
  LocalFileExtension = 'localFile___extension',
  LocalFileSize = 'localFile___size',
  LocalFilePrettySize = 'localFile___prettySize',
  LocalFileModifiedTime = 'localFile___modifiedTime',
  LocalFileAccessTime = 'localFile___accessTime',
  LocalFileChangeTime = 'localFile___changeTime',
  LocalFileBirthTime = 'localFile___birthTime',
  LocalFileRoot = 'localFile___root',
  LocalFileDir = 'localFile___dir',
  LocalFileBase = 'localFile___base',
  LocalFileExt = 'localFile___ext',
  LocalFileName = 'localFile___name',
  LocalFileRelativeDirectory = 'localFile___relativeDirectory',
  LocalFileDev = 'localFile___dev',
  LocalFileMode = 'localFile___mode',
  LocalFileNlink = 'localFile___nlink',
  LocalFileUid = 'localFile___uid',
  LocalFileGid = 'localFile___gid',
  LocalFileRdev = 'localFile___rdev',
  LocalFileIno = 'localFile___ino',
  LocalFileAtimeMs = 'localFile___atimeMs',
  LocalFileMtimeMs = 'localFile___mtimeMs',
  LocalFileCtimeMs = 'localFile___ctimeMs',
  LocalFileAtime = 'localFile___atime',
  LocalFileMtime = 'localFile___mtime',
  LocalFileCtime = 'localFile___ctime',
  LocalFileBirthtime = 'localFile___birthtime',
  LocalFileBirthtimeMs = 'localFile___birthtimeMs',
  LocalFileBlksize = 'localFile___blksize',
  LocalFileBlocks = 'localFile___blocks',
  LocalFileUrl = 'localFile___url',
  LocalFileChildImageSharpFixedBase64 = 'localFile___childImageSharp___fixed___base64',
  LocalFileChildImageSharpFixedTracedSvg = 'localFile___childImageSharp___fixed___tracedSVG',
  LocalFileChildImageSharpFixedAspectRatio = 'localFile___childImageSharp___fixed___aspectRatio',
  LocalFileChildImageSharpFixedWidth = 'localFile___childImageSharp___fixed___width',
  LocalFileChildImageSharpFixedHeight = 'localFile___childImageSharp___fixed___height',
  LocalFileChildImageSharpFixedSrc = 'localFile___childImageSharp___fixed___src',
  LocalFileChildImageSharpFixedSrcSet = 'localFile___childImageSharp___fixed___srcSet',
  LocalFileChildImageSharpFixedSrcWebp = 'localFile___childImageSharp___fixed___srcWebp',
  LocalFileChildImageSharpFixedSrcSetWebp = 'localFile___childImageSharp___fixed___srcSetWebp',
  LocalFileChildImageSharpFixedOriginalName = 'localFile___childImageSharp___fixed___originalName',
  LocalFileChildImageSharpResolutionsBase64 = 'localFile___childImageSharp___resolutions___base64',
  LocalFileChildImageSharpResolutionsTracedSvg = 'localFile___childImageSharp___resolutions___tracedSVG',
  LocalFileChildImageSharpResolutionsAspectRatio = 'localFile___childImageSharp___resolutions___aspectRatio',
  LocalFileChildImageSharpResolutionsWidth = 'localFile___childImageSharp___resolutions___width',
  LocalFileChildImageSharpResolutionsHeight = 'localFile___childImageSharp___resolutions___height',
  LocalFileChildImageSharpResolutionsSrc = 'localFile___childImageSharp___resolutions___src',
  LocalFileChildImageSharpResolutionsSrcSet = 'localFile___childImageSharp___resolutions___srcSet',
  LocalFileChildImageSharpResolutionsSrcWebp = 'localFile___childImageSharp___resolutions___srcWebp',
  LocalFileChildImageSharpResolutionsSrcSetWebp = 'localFile___childImageSharp___resolutions___srcSetWebp',
  LocalFileChildImageSharpResolutionsOriginalName = 'localFile___childImageSharp___resolutions___originalName',
  LocalFileChildImageSharpFluidBase64 = 'localFile___childImageSharp___fluid___base64',
  LocalFileChildImageSharpFluidTracedSvg = 'localFile___childImageSharp___fluid___tracedSVG',
  LocalFileChildImageSharpFluidAspectRatio = 'localFile___childImageSharp___fluid___aspectRatio',
  LocalFileChildImageSharpFluidSrc = 'localFile___childImageSharp___fluid___src',
  LocalFileChildImageSharpFluidSrcSet = 'localFile___childImageSharp___fluid___srcSet',
  LocalFileChildImageSharpFluidSrcWebp = 'localFile___childImageSharp___fluid___srcWebp',
  LocalFileChildImageSharpFluidSrcSetWebp = 'localFile___childImageSharp___fluid___srcSetWebp',
  LocalFileChildImageSharpFluidSizes = 'localFile___childImageSharp___fluid___sizes',
  LocalFileChildImageSharpFluidOriginalImg = 'localFile___childImageSharp___fluid___originalImg',
  LocalFileChildImageSharpFluidOriginalName = 'localFile___childImageSharp___fluid___originalName',
  LocalFileChildImageSharpFluidPresentationWidth = 'localFile___childImageSharp___fluid___presentationWidth',
  LocalFileChildImageSharpFluidPresentationHeight = 'localFile___childImageSharp___fluid___presentationHeight',
  LocalFileChildImageSharpSizesBase64 = 'localFile___childImageSharp___sizes___base64',
  LocalFileChildImageSharpSizesTracedSvg = 'localFile___childImageSharp___sizes___tracedSVG',
  LocalFileChildImageSharpSizesAspectRatio = 'localFile___childImageSharp___sizes___aspectRatio',
  LocalFileChildImageSharpSizesSrc = 'localFile___childImageSharp___sizes___src',
  LocalFileChildImageSharpSizesSrcSet = 'localFile___childImageSharp___sizes___srcSet',
  LocalFileChildImageSharpSizesSrcWebp = 'localFile___childImageSharp___sizes___srcWebp',
  LocalFileChildImageSharpSizesSrcSetWebp = 'localFile___childImageSharp___sizes___srcSetWebp',
  LocalFileChildImageSharpSizesSizes = 'localFile___childImageSharp___sizes___sizes',
  LocalFileChildImageSharpSizesOriginalImg = 'localFile___childImageSharp___sizes___originalImg',
  LocalFileChildImageSharpSizesOriginalName = 'localFile___childImageSharp___sizes___originalName',
  LocalFileChildImageSharpSizesPresentationWidth = 'localFile___childImageSharp___sizes___presentationWidth',
  LocalFileChildImageSharpSizesPresentationHeight = 'localFile___childImageSharp___sizes___presentationHeight',
  LocalFileChildImageSharpOriginalWidth = 'localFile___childImageSharp___original___width',
  LocalFileChildImageSharpOriginalHeight = 'localFile___childImageSharp___original___height',
  LocalFileChildImageSharpOriginalSrc = 'localFile___childImageSharp___original___src',
  LocalFileChildImageSharpResizeSrc = 'localFile___childImageSharp___resize___src',
  LocalFileChildImageSharpResizeTracedSvg = 'localFile___childImageSharp___resize___tracedSVG',
  LocalFileChildImageSharpResizeWidth = 'localFile___childImageSharp___resize___width',
  LocalFileChildImageSharpResizeHeight = 'localFile___childImageSharp___resize___height',
  LocalFileChildImageSharpResizeAspectRatio = 'localFile___childImageSharp___resize___aspectRatio',
  LocalFileChildImageSharpResizeOriginalName = 'localFile___childImageSharp___resize___originalName',
  LocalFileChildImageSharpId = 'localFile___childImageSharp___id',
  LocalFileChildImageSharpParentId = 'localFile___childImageSharp___parent___id',
  LocalFileChildImageSharpParentChildren = 'localFile___childImageSharp___parent___children',
  LocalFileChildImageSharpChildren = 'localFile___childImageSharp___children',
  LocalFileChildImageSharpChildrenId = 'localFile___childImageSharp___children___id',
  LocalFileChildImageSharpChildrenChildren = 'localFile___childImageSharp___children___children',
  LocalFileChildImageSharpInternalContent = 'localFile___childImageSharp___internal___content',
  LocalFileChildImageSharpInternalContentDigest = 'localFile___childImageSharp___internal___contentDigest',
  LocalFileChildImageSharpInternalDescription = 'localFile___childImageSharp___internal___description',
  LocalFileChildImageSharpInternalFieldOwners = 'localFile___childImageSharp___internal___fieldOwners',
  LocalFileChildImageSharpInternalIgnoreType = 'localFile___childImageSharp___internal___ignoreType',
  LocalFileChildImageSharpInternalMediaType = 'localFile___childImageSharp___internal___mediaType',
  LocalFileChildImageSharpInternalOwner = 'localFile___childImageSharp___internal___owner',
  LocalFileChildImageSharpInternalType = 'localFile___childImageSharp___internal___type',
  LocalFileId = 'localFile___id',
  LocalFileParentId = 'localFile___parent___id',
  LocalFileParentParentId = 'localFile___parent___parent___id',
  LocalFileParentParentChildren = 'localFile___parent___parent___children',
  LocalFileParentChildren = 'localFile___parent___children',
  LocalFileParentChildrenId = 'localFile___parent___children___id',
  LocalFileParentChildrenChildren = 'localFile___parent___children___children',
  LocalFileParentInternalContent = 'localFile___parent___internal___content',
  LocalFileParentInternalContentDigest = 'localFile___parent___internal___contentDigest',
  LocalFileParentInternalDescription = 'localFile___parent___internal___description',
  LocalFileParentInternalFieldOwners = 'localFile___parent___internal___fieldOwners',
  LocalFileParentInternalIgnoreType = 'localFile___parent___internal___ignoreType',
  LocalFileParentInternalMediaType = 'localFile___parent___internal___mediaType',
  LocalFileParentInternalOwner = 'localFile___parent___internal___owner',
  LocalFileParentInternalType = 'localFile___parent___internal___type',
  LocalFileChildren = 'localFile___children',
  LocalFileChildrenId = 'localFile___children___id',
  LocalFileChildrenParentId = 'localFile___children___parent___id',
  LocalFileChildrenParentChildren = 'localFile___children___parent___children',
  LocalFileChildrenChildren = 'localFile___children___children',
  LocalFileChildrenChildrenId = 'localFile___children___children___id',
  LocalFileChildrenChildrenChildren = 'localFile___children___children___children',
  LocalFileChildrenInternalContent = 'localFile___children___internal___content',
  LocalFileChildrenInternalContentDigest = 'localFile___children___internal___contentDigest',
  LocalFileChildrenInternalDescription = 'localFile___children___internal___description',
  LocalFileChildrenInternalFieldOwners = 'localFile___children___internal___fieldOwners',
  LocalFileChildrenInternalIgnoreType = 'localFile___children___internal___ignoreType',
  LocalFileChildrenInternalMediaType = 'localFile___children___internal___mediaType',
  LocalFileChildrenInternalOwner = 'localFile___children___internal___owner',
  LocalFileChildrenInternalType = 'localFile___children___internal___type',
  LocalFileInternalContent = 'localFile___internal___content',
  LocalFileInternalContentDigest = 'localFile___internal___contentDigest',
  LocalFileInternalDescription = 'localFile___internal___description',
  LocalFileInternalFieldOwners = 'localFile___internal___fieldOwners',
  LocalFileInternalIgnoreType = 'localFile___internal___ignoreType',
  LocalFileInternalMediaType = 'localFile___internal___mediaType',
  LocalFileInternalOwner = 'localFile___internal___owner',
  LocalFileInternalType = 'localFile___internal___type',
  Path = 'path'
}

export type Wordpress__Wp_MediaFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  comment_status?: Maybe<StringQueryOperatorInput>;
  ping_status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  caption?: Maybe<StringQueryOperatorInput>;
  alt_text?: Maybe<StringQueryOperatorInput>;
  media_type?: Maybe<StringQueryOperatorInput>;
  mime_type?: Maybe<StringQueryOperatorInput>;
  media_details?: Maybe<Wordpress__Wp_MediaMedia_DetailsFilterInput>;
  source_url?: Maybe<StringQueryOperatorInput>;
  _links?: Maybe<Wordpress__Wp_Media_LinksFilterInput>;
  author?: Maybe<Wordpress__Wp_UsersFilterInput>;
  guid?: Maybe<Wordpress__Wp_MediaFilterInput>;
  localFile?: Maybe<FileFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_MediaFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_MediaFilterInput>;
};

export type Wordpress__Wp_MediaGroupConnection = {
  __typename?: 'wordpress__wp_mediaGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Wp_MediaEdge>;
  nodes: Array<Wordpress__Wp_Media>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_MediaMedia_Details = {
  __typename?: 'wordpress__wp_mediaMedia_details';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  file?: Maybe<Scalars['String']>;
  image_meta?: Maybe<Wordpress__Wp_MediaMedia_DetailsImage_Meta>;
  original_image?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_MediaMedia_DetailsFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  file?: Maybe<StringQueryOperatorInput>;
  image_meta?: Maybe<Wordpress__Wp_MediaMedia_DetailsImage_MetaFilterInput>;
  original_image?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_MediaMedia_DetailsImage_Meta = {
  __typename?: 'wordpress__wp_mediaMedia_detailsImage_meta';
  aperture?: Maybe<Scalars['String']>;
  credit?: Maybe<Scalars['String']>;
  camera?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_timestamp?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  focal_length?: Maybe<Scalars['String']>;
  iso?: Maybe<Scalars['String']>;
  shutter_speed?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  orientation?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_MediaMedia_DetailsImage_MetaFilterInput = {
  aperture?: Maybe<StringQueryOperatorInput>;
  credit?: Maybe<StringQueryOperatorInput>;
  camera?: Maybe<StringQueryOperatorInput>;
  caption?: Maybe<StringQueryOperatorInput>;
  created_timestamp?: Maybe<StringQueryOperatorInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  focal_length?: Maybe<StringQueryOperatorInput>;
  iso?: Maybe<StringQueryOperatorInput>;
  shutter_speed?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  orientation?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_MediaSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Wp_MediaFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__Wp_Search = Node & {
  __typename?: 'wordpress__wp_search';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  _links?: Maybe<Wordpress__Wp_Search_Links>;
};

export type Wordpress__Wp_Search_Links = {
  __typename?: 'wordpress__wp_search_links';
  about?: Maybe<Array<Maybe<Wordpress__Wp_Search_LinksAbout>>>;
  collection?: Maybe<Array<Maybe<Wordpress__Wp_Search_LinksCollection>>>;
};

export type Wordpress__Wp_Search_LinksAbout = {
  __typename?: 'wordpress__wp_search_linksAbout';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Search_LinksAboutFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Search_LinksAboutFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Search_LinksAboutFilterInput>;
};

export type Wordpress__Wp_Search_LinksCollection = {
  __typename?: 'wordpress__wp_search_linksCollection';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Search_LinksCollectionFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Search_LinksCollectionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Search_LinksCollectionFilterInput>;
};

export type Wordpress__Wp_Search_LinksFilterInput = {
  about?: Maybe<Wordpress__Wp_Search_LinksAboutFilterListInput>;
  collection?: Maybe<Wordpress__Wp_Search_LinksCollectionFilterListInput>;
};

export type Wordpress__Wp_SearchConnection = {
  __typename?: 'wordpress__wp_searchConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Wp_SearchEdge>;
  nodes: Array<Wordpress__Wp_Search>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__Wp_SearchGroupConnection>;
};


export type Wordpress__Wp_SearchConnectionDistinctArgs = {
  field: Wordpress__Wp_SearchFieldsEnum;
};


export type Wordpress__Wp_SearchConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__Wp_SearchFieldsEnum;
};

export type Wordpress__Wp_SearchEdge = {
  __typename?: 'wordpress__wp_searchEdge';
  next?: Maybe<Wordpress__Wp_Search>;
  node: Wordpress__Wp_Search;
  previous?: Maybe<Wordpress__Wp_Search>;
};

export enum Wordpress__Wp_SearchFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  WordpressId = 'wordpress_id',
  Title = 'title',
  Url = 'url',
  Type = 'type',
  Subtype = 'subtype',
  LinksAbout = '_links___about',
  LinksAboutHref = '_links___about___href',
  LinksCollection = '_links___collection',
  LinksCollectionHref = '_links___collection___href'
}

export type Wordpress__Wp_SearchFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  subtype?: Maybe<StringQueryOperatorInput>;
  _links?: Maybe<Wordpress__Wp_Search_LinksFilterInput>;
};

export type Wordpress__Wp_SearchGroupConnection = {
  __typename?: 'wordpress__wp_searchGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Wp_SearchEdge>;
  nodes: Array<Wordpress__Wp_Search>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_SearchSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Wp_SearchFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__Wp_Statuses = Node & {
  __typename?: 'wordpress__wp_statuses';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  queryable?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  date_floating?: Maybe<Scalars['Boolean']>;
  _links?: Maybe<Wordpress__Wp_Statuses_Links>;
};

export type Wordpress__Wp_Statuses_Links = {
  __typename?: 'wordpress__wp_statuses_links';
  archives?: Maybe<Array<Maybe<Wordpress__Wp_Statuses_LinksArchives>>>;
};

export type Wordpress__Wp_Statuses_LinksArchives = {
  __typename?: 'wordpress__wp_statuses_linksArchives';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Statuses_LinksArchivesFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Statuses_LinksArchivesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Statuses_LinksArchivesFilterInput>;
};

export type Wordpress__Wp_Statuses_LinksFilterInput = {
  archives?: Maybe<Wordpress__Wp_Statuses_LinksArchivesFilterListInput>;
};

export type Wordpress__Wp_StatusesConnection = {
  __typename?: 'wordpress__wp_statusesConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Wp_StatusesEdge>;
  nodes: Array<Wordpress__Wp_Statuses>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__Wp_StatusesGroupConnection>;
};


export type Wordpress__Wp_StatusesConnectionDistinctArgs = {
  field: Wordpress__Wp_StatusesFieldsEnum;
};


export type Wordpress__Wp_StatusesConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__Wp_StatusesFieldsEnum;
};

export type Wordpress__Wp_StatusesEdge = {
  __typename?: 'wordpress__wp_statusesEdge';
  next?: Maybe<Wordpress__Wp_Statuses>;
  node: Wordpress__Wp_Statuses;
  previous?: Maybe<Wordpress__Wp_Statuses>;
};

export enum Wordpress__Wp_StatusesFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  WordpressId = 'wordpress_id',
  Name = 'name',
  Public = 'public',
  Queryable = 'queryable',
  Slug = 'slug',
  DateFloating = 'date_floating',
  LinksArchives = '_links___archives',
  LinksArchivesHref = '_links___archives___href'
}

export type Wordpress__Wp_StatusesFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  public?: Maybe<BooleanQueryOperatorInput>;
  queryable?: Maybe<BooleanQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  date_floating?: Maybe<BooleanQueryOperatorInput>;
  _links?: Maybe<Wordpress__Wp_Statuses_LinksFilterInput>;
};

export type Wordpress__Wp_StatusesGroupConnection = {
  __typename?: 'wordpress__wp_statusesGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Wp_StatusesEdge>;
  nodes: Array<Wordpress__Wp_Statuses>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_StatusesSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Wp_StatusesFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__Wp_Taxonomies = Node & {
  __typename?: 'wordpress__wp_taxonomies';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  rest_base?: Maybe<Scalars['String']>;
  _links?: Maybe<Wordpress__Wp_Taxonomies_Links>;
};

export type Wordpress__Wp_Taxonomies_Links = {
  __typename?: 'wordpress__wp_taxonomies_links';
  collection?: Maybe<Array<Maybe<Wordpress__Wp_Taxonomies_LinksCollection>>>;
  wp_items?: Maybe<Array<Maybe<Wordpress__Wp_Taxonomies_LinksWp_Items>>>;
  curies?: Maybe<Array<Maybe<Wordpress__Wp_Taxonomies_LinksCuries>>>;
};

export type Wordpress__Wp_Taxonomies_LinksCollection = {
  __typename?: 'wordpress__wp_taxonomies_linksCollection';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Taxonomies_LinksCollectionFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Taxonomies_LinksCollectionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Taxonomies_LinksCollectionFilterInput>;
};

export type Wordpress__Wp_Taxonomies_LinksCuries = {
  __typename?: 'wordpress__wp_taxonomies_linksCuries';
  name?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  templated?: Maybe<Scalars['Boolean']>;
};

export type Wordpress__Wp_Taxonomies_LinksCuriesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  templated?: Maybe<BooleanQueryOperatorInput>;
};

export type Wordpress__Wp_Taxonomies_LinksCuriesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Taxonomies_LinksCuriesFilterInput>;
};

export type Wordpress__Wp_Taxonomies_LinksFilterInput = {
  collection?: Maybe<Wordpress__Wp_Taxonomies_LinksCollectionFilterListInput>;
  wp_items?: Maybe<Wordpress__Wp_Taxonomies_LinksWp_ItemsFilterListInput>;
  curies?: Maybe<Wordpress__Wp_Taxonomies_LinksCuriesFilterListInput>;
};

export type Wordpress__Wp_Taxonomies_LinksWp_Items = {
  __typename?: 'wordpress__wp_taxonomies_linksWp_items';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Taxonomies_LinksWp_ItemsFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Taxonomies_LinksWp_ItemsFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Taxonomies_LinksWp_ItemsFilterInput>;
};

export type Wordpress__Wp_TaxonomiesConnection = {
  __typename?: 'wordpress__wp_taxonomiesConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Wp_TaxonomiesEdge>;
  nodes: Array<Wordpress__Wp_Taxonomies>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__Wp_TaxonomiesGroupConnection>;
};


export type Wordpress__Wp_TaxonomiesConnectionDistinctArgs = {
  field: Wordpress__Wp_TaxonomiesFieldsEnum;
};


export type Wordpress__Wp_TaxonomiesConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__Wp_TaxonomiesFieldsEnum;
};

export type Wordpress__Wp_TaxonomiesEdge = {
  __typename?: 'wordpress__wp_taxonomiesEdge';
  next?: Maybe<Wordpress__Wp_Taxonomies>;
  node: Wordpress__Wp_Taxonomies;
  previous?: Maybe<Wordpress__Wp_Taxonomies>;
};

export enum Wordpress__Wp_TaxonomiesFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  WordpressId = 'wordpress_id',
  Name = 'name',
  Slug = 'slug',
  Description = 'description',
  Types = 'types',
  Hierarchical = 'hierarchical',
  RestBase = 'rest_base',
  LinksCollection = '_links___collection',
  LinksCollectionHref = '_links___collection___href',
  LinksWpItems = '_links___wp_items',
  LinksWpItemsHref = '_links___wp_items___href',
  LinksCuries = '_links___curies',
  LinksCuriesName = '_links___curies___name',
  LinksCuriesHref = '_links___curies___href',
  LinksCuriesTemplated = '_links___curies___templated'
}

export type Wordpress__Wp_TaxonomiesFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  types?: Maybe<StringQueryOperatorInput>;
  hierarchical?: Maybe<BooleanQueryOperatorInput>;
  rest_base?: Maybe<StringQueryOperatorInput>;
  _links?: Maybe<Wordpress__Wp_Taxonomies_LinksFilterInput>;
};

export type Wordpress__Wp_TaxonomiesGroupConnection = {
  __typename?: 'wordpress__wp_taxonomiesGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Wp_TaxonomiesEdge>;
  nodes: Array<Wordpress__Wp_Taxonomies>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_TaxonomiesSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Wp_TaxonomiesFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__Wp_Types = Node & {
  __typename?: 'wordpress__wp_types';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  taxonomies?: Maybe<Array<Maybe<Scalars['String']>>>;
  rest_base?: Maybe<Scalars['String']>;
  _links?: Maybe<Wordpress__Wp_Types_Links>;
};

export type Wordpress__Wp_Types_Links = {
  __typename?: 'wordpress__wp_types_links';
  collection?: Maybe<Array<Maybe<Wordpress__Wp_Types_LinksCollection>>>;
  wp_items?: Maybe<Array<Maybe<Wordpress__Wp_Types_LinksWp_Items>>>;
  curies?: Maybe<Array<Maybe<Wordpress__Wp_Types_LinksCuries>>>;
};

export type Wordpress__Wp_Types_LinksCollection = {
  __typename?: 'wordpress__wp_types_linksCollection';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Types_LinksCollectionFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Types_LinksCollectionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Types_LinksCollectionFilterInput>;
};

export type Wordpress__Wp_Types_LinksCuries = {
  __typename?: 'wordpress__wp_types_linksCuries';
  name?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  templated?: Maybe<Scalars['Boolean']>;
};

export type Wordpress__Wp_Types_LinksCuriesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  templated?: Maybe<BooleanQueryOperatorInput>;
};

export type Wordpress__Wp_Types_LinksCuriesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Types_LinksCuriesFilterInput>;
};

export type Wordpress__Wp_Types_LinksFilterInput = {
  collection?: Maybe<Wordpress__Wp_Types_LinksCollectionFilterListInput>;
  wp_items?: Maybe<Wordpress__Wp_Types_LinksWp_ItemsFilterListInput>;
  curies?: Maybe<Wordpress__Wp_Types_LinksCuriesFilterListInput>;
};

export type Wordpress__Wp_Types_LinksWp_Items = {
  __typename?: 'wordpress__wp_types_linksWp_items';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Types_LinksWp_ItemsFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Types_LinksWp_ItemsFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Types_LinksWp_ItemsFilterInput>;
};

export type Wordpress__Wp_TypesConnection = {
  __typename?: 'wordpress__wp_typesConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Wp_TypesEdge>;
  nodes: Array<Wordpress__Wp_Types>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__Wp_TypesGroupConnection>;
};


export type Wordpress__Wp_TypesConnectionDistinctArgs = {
  field: Wordpress__Wp_TypesFieldsEnum;
};


export type Wordpress__Wp_TypesConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__Wp_TypesFieldsEnum;
};

export type Wordpress__Wp_TypesEdge = {
  __typename?: 'wordpress__wp_typesEdge';
  next?: Maybe<Wordpress__Wp_Types>;
  node: Wordpress__Wp_Types;
  previous?: Maybe<Wordpress__Wp_Types>;
};

export enum Wordpress__Wp_TypesFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  WordpressId = 'wordpress_id',
  Description = 'description',
  Hierarchical = 'hierarchical',
  Name = 'name',
  Slug = 'slug',
  Taxonomies = 'taxonomies',
  RestBase = 'rest_base',
  LinksCollection = '_links___collection',
  LinksCollectionHref = '_links___collection___href',
  LinksWpItems = '_links___wp_items',
  LinksWpItemsHref = '_links___wp_items___href',
  LinksCuries = '_links___curies',
  LinksCuriesName = '_links___curies___name',
  LinksCuriesHref = '_links___curies___href',
  LinksCuriesTemplated = '_links___curies___templated'
}

export type Wordpress__Wp_TypesFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  hierarchical?: Maybe<BooleanQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  taxonomies?: Maybe<StringQueryOperatorInput>;
  rest_base?: Maybe<StringQueryOperatorInput>;
  _links?: Maybe<Wordpress__Wp_Types_LinksFilterInput>;
};

export type Wordpress__Wp_TypesGroupConnection = {
  __typename?: 'wordpress__wp_typesGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Wp_TypesEdge>;
  nodes: Array<Wordpress__Wp_Types>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_TypesSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Wp_TypesFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Wordpress__Wp_Users = Node & {
  __typename?: 'wordpress__wp_users';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  wordpress_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  avatar_urls?: Maybe<Wordpress__Wp_UsersAvatar_Urls>;
  _links?: Maybe<Wordpress__Wp_Users_Links>;
  all_authored_entities?: Maybe<Array<Maybe<Wordpress__PagEwordpress__PosTwordpress__Wp_MediaUnion>>>;
  authored_wordpress__PAGE?: Maybe<Array<Maybe<Wordpress__Page>>>;
  authored_wordpress__wp_media?: Maybe<Array<Maybe<Wordpress__Wp_Media>>>;
  path?: Maybe<Scalars['String']>;
  authored_wordpress__POST?: Maybe<Array<Maybe<Wordpress__Post>>>;
};

export type Wordpress__Wp_Users_Links = {
  __typename?: 'wordpress__wp_users_links';
  self?: Maybe<Array<Maybe<Wordpress__Wp_Users_LinksSelf>>>;
  collection?: Maybe<Array<Maybe<Wordpress__Wp_Users_LinksCollection>>>;
};

export type Wordpress__Wp_Users_LinksCollection = {
  __typename?: 'wordpress__wp_users_linksCollection';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Users_LinksCollectionFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Users_LinksCollectionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Users_LinksCollectionFilterInput>;
};

export type Wordpress__Wp_Users_LinksFilterInput = {
  self?: Maybe<Wordpress__Wp_Users_LinksSelfFilterListInput>;
  collection?: Maybe<Wordpress__Wp_Users_LinksCollectionFilterListInput>;
};

export type Wordpress__Wp_Users_LinksSelf = {
  __typename?: 'wordpress__wp_users_linksSelf';
  href?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_Users_LinksSelfFilterInput = {
  href?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_Users_LinksSelfFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Users_LinksSelfFilterInput>;
};

export type Wordpress__Wp_UsersAvatar_Urls = {
  __typename?: 'wordpress__wp_usersAvatar_urls';
  wordpress_24?: Maybe<Scalars['String']>;
  wordpress_48?: Maybe<Scalars['String']>;
  wordpress_96?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_UsersAvatar_UrlsFilterInput = {
  wordpress_24?: Maybe<StringQueryOperatorInput>;
  wordpress_48?: Maybe<StringQueryOperatorInput>;
  wordpress_96?: Maybe<StringQueryOperatorInput>;
};

export type Wordpress__Wp_UsersConnection = {
  __typename?: 'wordpress__wp_usersConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Wp_UsersEdge>;
  nodes: Array<Wordpress__Wp_Users>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<Wordpress__Wp_UsersGroupConnection>;
};


export type Wordpress__Wp_UsersConnectionDistinctArgs = {
  field: Wordpress__Wp_UsersFieldsEnum;
};


export type Wordpress__Wp_UsersConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: Wordpress__Wp_UsersFieldsEnum;
};

export type Wordpress__Wp_UsersEdge = {
  __typename?: 'wordpress__wp_usersEdge';
  next?: Maybe<Wordpress__Wp_Users>;
  node: Wordpress__Wp_Users;
  previous?: Maybe<Wordpress__Wp_Users>;
};

export enum Wordpress__Wp_UsersFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  WordpressId = 'wordpress_id',
  Name = 'name',
  Url = 'url',
  Description = 'description',
  Link = 'link',
  Slug = 'slug',
  AvatarUrlsWordpress_24 = 'avatar_urls___wordpress_24',
  AvatarUrlsWordpress_48 = 'avatar_urls___wordpress_48',
  AvatarUrlsWordpress_96 = 'avatar_urls___wordpress_96',
  LinksSelf = '_links___self',
  LinksSelfHref = '_links___self___href',
  LinksCollection = '_links___collection',
  LinksCollectionHref = '_links___collection___href',
  AuthoredWordpressPage = 'authored_wordpress__PAGE',
  AuthoredWordpressPageId = 'authored_wordpress__PAGE___id',
  AuthoredWordpressPageParentId = 'authored_wordpress__PAGE___parent___id',
  AuthoredWordpressPageParentParentId = 'authored_wordpress__PAGE___parent___parent___id',
  AuthoredWordpressPageParentParentChildren = 'authored_wordpress__PAGE___parent___parent___children',
  AuthoredWordpressPageParentChildren = 'authored_wordpress__PAGE___parent___children',
  AuthoredWordpressPageParentChildrenId = 'authored_wordpress__PAGE___parent___children___id',
  AuthoredWordpressPageParentChildrenChildren = 'authored_wordpress__PAGE___parent___children___children',
  AuthoredWordpressPageParentInternalContent = 'authored_wordpress__PAGE___parent___internal___content',
  AuthoredWordpressPageParentInternalContentDigest = 'authored_wordpress__PAGE___parent___internal___contentDigest',
  AuthoredWordpressPageParentInternalDescription = 'authored_wordpress__PAGE___parent___internal___description',
  AuthoredWordpressPageParentInternalFieldOwners = 'authored_wordpress__PAGE___parent___internal___fieldOwners',
  AuthoredWordpressPageParentInternalIgnoreType = 'authored_wordpress__PAGE___parent___internal___ignoreType',
  AuthoredWordpressPageParentInternalMediaType = 'authored_wordpress__PAGE___parent___internal___mediaType',
  AuthoredWordpressPageParentInternalOwner = 'authored_wordpress__PAGE___parent___internal___owner',
  AuthoredWordpressPageParentInternalType = 'authored_wordpress__PAGE___parent___internal___type',
  AuthoredWordpressPageChildren = 'authored_wordpress__PAGE___children',
  AuthoredWordpressPageChildrenId = 'authored_wordpress__PAGE___children___id',
  AuthoredWordpressPageChildrenParentId = 'authored_wordpress__PAGE___children___parent___id',
  AuthoredWordpressPageChildrenParentChildren = 'authored_wordpress__PAGE___children___parent___children',
  AuthoredWordpressPageChildrenChildren = 'authored_wordpress__PAGE___children___children',
  AuthoredWordpressPageChildrenChildrenId = 'authored_wordpress__PAGE___children___children___id',
  AuthoredWordpressPageChildrenChildrenChildren = 'authored_wordpress__PAGE___children___children___children',
  AuthoredWordpressPageChildrenInternalContent = 'authored_wordpress__PAGE___children___internal___content',
  AuthoredWordpressPageChildrenInternalContentDigest = 'authored_wordpress__PAGE___children___internal___contentDigest',
  AuthoredWordpressPageChildrenInternalDescription = 'authored_wordpress__PAGE___children___internal___description',
  AuthoredWordpressPageChildrenInternalFieldOwners = 'authored_wordpress__PAGE___children___internal___fieldOwners',
  AuthoredWordpressPageChildrenInternalIgnoreType = 'authored_wordpress__PAGE___children___internal___ignoreType',
  AuthoredWordpressPageChildrenInternalMediaType = 'authored_wordpress__PAGE___children___internal___mediaType',
  AuthoredWordpressPageChildrenInternalOwner = 'authored_wordpress__PAGE___children___internal___owner',
  AuthoredWordpressPageChildrenInternalType = 'authored_wordpress__PAGE___children___internal___type',
  AuthoredWordpressPageInternalContent = 'authored_wordpress__PAGE___internal___content',
  AuthoredWordpressPageInternalContentDigest = 'authored_wordpress__PAGE___internal___contentDigest',
  AuthoredWordpressPageInternalDescription = 'authored_wordpress__PAGE___internal___description',
  AuthoredWordpressPageInternalFieldOwners = 'authored_wordpress__PAGE___internal___fieldOwners',
  AuthoredWordpressPageInternalIgnoreType = 'authored_wordpress__PAGE___internal___ignoreType',
  AuthoredWordpressPageInternalMediaType = 'authored_wordpress__PAGE___internal___mediaType',
  AuthoredWordpressPageInternalOwner = 'authored_wordpress__PAGE___internal___owner',
  AuthoredWordpressPageInternalType = 'authored_wordpress__PAGE___internal___type',
  AuthoredWordpressPageWordpressId = 'authored_wordpress__PAGE___wordpress_id',
  AuthoredWordpressPageDate = 'authored_wordpress__PAGE___date',
  AuthoredWordpressPageGuid = 'authored_wordpress__PAGE___guid',
  AuthoredWordpressPageModified = 'authored_wordpress__PAGE___modified',
  AuthoredWordpressPageSlug = 'authored_wordpress__PAGE___slug',
  AuthoredWordpressPageStatus = 'authored_wordpress__PAGE___status',
  AuthoredWordpressPageType = 'authored_wordpress__PAGE___type',
  AuthoredWordpressPageLink = 'authored_wordpress__PAGE___link',
  AuthoredWordpressPageTitle = 'authored_wordpress__PAGE___title',
  AuthoredWordpressPageContent = 'authored_wordpress__PAGE___content',
  AuthoredWordpressPageExcerpt = 'authored_wordpress__PAGE___excerpt',
  AuthoredWordpressPageWordpressParent = 'authored_wordpress__PAGE___wordpress_parent',
  AuthoredWordpressPageMenuOrder = 'authored_wordpress__PAGE___menu_order',
  AuthoredWordpressPageCommentStatus = 'authored_wordpress__PAGE___comment_status',
  AuthoredWordpressPagePingStatus = 'authored_wordpress__PAGE___ping_status',
  AuthoredWordpressPageTemplate = 'authored_wordpress__PAGE___template',
  AuthoredWordpressPageLinksSelf = 'authored_wordpress__PAGE____links___self',
  AuthoredWordpressPageLinksSelfHref = 'authored_wordpress__PAGE____links___self___href',
  AuthoredWordpressPageLinksCollection = 'authored_wordpress__PAGE____links___collection',
  AuthoredWordpressPageLinksCollectionHref = 'authored_wordpress__PAGE____links___collection___href',
  AuthoredWordpressPageLinksAbout = 'authored_wordpress__PAGE____links___about',
  AuthoredWordpressPageLinksAboutHref = 'authored_wordpress__PAGE____links___about___href',
  AuthoredWordpressPageLinksAuthor = 'authored_wordpress__PAGE____links___author',
  AuthoredWordpressPageLinksAuthorEmbeddable = 'authored_wordpress__PAGE____links___author___embeddable',
  AuthoredWordpressPageLinksAuthorHref = 'authored_wordpress__PAGE____links___author___href',
  AuthoredWordpressPageLinksReplies = 'authored_wordpress__PAGE____links___replies',
  AuthoredWordpressPageLinksRepliesEmbeddable = 'authored_wordpress__PAGE____links___replies___embeddable',
  AuthoredWordpressPageLinksRepliesHref = 'authored_wordpress__PAGE____links___replies___href',
  AuthoredWordpressPageLinksVersionHistory = 'authored_wordpress__PAGE____links___version_history',
  AuthoredWordpressPageLinksVersionHistoryCount = 'authored_wordpress__PAGE____links___version_history___count',
  AuthoredWordpressPageLinksVersionHistoryHref = 'authored_wordpress__PAGE____links___version_history___href',
  AuthoredWordpressPageLinksPredecessorVersion = 'authored_wordpress__PAGE____links___predecessor_version',
  AuthoredWordpressPageLinksPredecessorVersionWordpressId = 'authored_wordpress__PAGE____links___predecessor_version___wordpress_id',
  AuthoredWordpressPageLinksPredecessorVersionHref = 'authored_wordpress__PAGE____links___predecessor_version___href',
  AuthoredWordpressPageLinksWpAttachment = 'authored_wordpress__PAGE____links___wp_attachment',
  AuthoredWordpressPageLinksWpAttachmentHref = 'authored_wordpress__PAGE____links___wp_attachment___href',
  AuthoredWordpressPageLinksCuries = 'authored_wordpress__PAGE____links___curies',
  AuthoredWordpressPageLinksCuriesName = 'authored_wordpress__PAGE____links___curies___name',
  AuthoredWordpressPageLinksCuriesHref = 'authored_wordpress__PAGE____links___curies___href',
  AuthoredWordpressPageLinksCuriesTemplated = 'authored_wordpress__PAGE____links___curies___templated',
  AuthoredWordpressPageAuthorId = 'authored_wordpress__PAGE___author___id',
  AuthoredWordpressPageAuthorParentId = 'authored_wordpress__PAGE___author___parent___id',
  AuthoredWordpressPageAuthorParentChildren = 'authored_wordpress__PAGE___author___parent___children',
  AuthoredWordpressPageAuthorChildren = 'authored_wordpress__PAGE___author___children',
  AuthoredWordpressPageAuthorChildrenId = 'authored_wordpress__PAGE___author___children___id',
  AuthoredWordpressPageAuthorChildrenChildren = 'authored_wordpress__PAGE___author___children___children',
  AuthoredWordpressPageAuthorInternalContent = 'authored_wordpress__PAGE___author___internal___content',
  AuthoredWordpressPageAuthorInternalContentDigest = 'authored_wordpress__PAGE___author___internal___contentDigest',
  AuthoredWordpressPageAuthorInternalDescription = 'authored_wordpress__PAGE___author___internal___description',
  AuthoredWordpressPageAuthorInternalFieldOwners = 'authored_wordpress__PAGE___author___internal___fieldOwners',
  AuthoredWordpressPageAuthorInternalIgnoreType = 'authored_wordpress__PAGE___author___internal___ignoreType',
  AuthoredWordpressPageAuthorInternalMediaType = 'authored_wordpress__PAGE___author___internal___mediaType',
  AuthoredWordpressPageAuthorInternalOwner = 'authored_wordpress__PAGE___author___internal___owner',
  AuthoredWordpressPageAuthorInternalType = 'authored_wordpress__PAGE___author___internal___type',
  AuthoredWordpressPageAuthorWordpressId = 'authored_wordpress__PAGE___author___wordpress_id',
  AuthoredWordpressPageAuthorName = 'authored_wordpress__PAGE___author___name',
  AuthoredWordpressPageAuthorUrl = 'authored_wordpress__PAGE___author___url',
  AuthoredWordpressPageAuthorDescription = 'authored_wordpress__PAGE___author___description',
  AuthoredWordpressPageAuthorLink = 'authored_wordpress__PAGE___author___link',
  AuthoredWordpressPageAuthorSlug = 'authored_wordpress__PAGE___author___slug',
  AuthoredWordpressPageAuthorAvatarUrlsWordpress_24 = 'authored_wordpress__PAGE___author___avatar_urls___wordpress_24',
  AuthoredWordpressPageAuthorAvatarUrlsWordpress_48 = 'authored_wordpress__PAGE___author___avatar_urls___wordpress_48',
  AuthoredWordpressPageAuthorAvatarUrlsWordpress_96 = 'authored_wordpress__PAGE___author___avatar_urls___wordpress_96',
  AuthoredWordpressPageAuthorLinksSelf = 'authored_wordpress__PAGE___author____links___self',
  AuthoredWordpressPageAuthorLinksCollection = 'authored_wordpress__PAGE___author____links___collection',
  AuthoredWordpressPageAuthorAuthoredWordpressPage = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE',
  AuthoredWordpressPageAuthorAuthoredWordpressPageId = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___id',
  AuthoredWordpressPageAuthorAuthoredWordpressPageChildren = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___children',
  AuthoredWordpressPageAuthorAuthoredWordpressPageWordpressId = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___wordpress_id',
  AuthoredWordpressPageAuthorAuthoredWordpressPageDate = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___date',
  AuthoredWordpressPageAuthorAuthoredWordpressPageGuid = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___guid',
  AuthoredWordpressPageAuthorAuthoredWordpressPageModified = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___modified',
  AuthoredWordpressPageAuthorAuthoredWordpressPageSlug = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___slug',
  AuthoredWordpressPageAuthorAuthoredWordpressPageStatus = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___status',
  AuthoredWordpressPageAuthorAuthoredWordpressPageType = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___type',
  AuthoredWordpressPageAuthorAuthoredWordpressPageLink = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___link',
  AuthoredWordpressPageAuthorAuthoredWordpressPageTitle = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___title',
  AuthoredWordpressPageAuthorAuthoredWordpressPageContent = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___content',
  AuthoredWordpressPageAuthorAuthoredWordpressPageExcerpt = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___excerpt',
  AuthoredWordpressPageAuthorAuthoredWordpressPageWordpressParent = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___wordpress_parent',
  AuthoredWordpressPageAuthorAuthoredWordpressPageMenuOrder = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___menu_order',
  AuthoredWordpressPageAuthorAuthoredWordpressPageCommentStatus = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___comment_status',
  AuthoredWordpressPageAuthorAuthoredWordpressPagePingStatus = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___ping_status',
  AuthoredWordpressPageAuthorAuthoredWordpressPageTemplate = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___template',
  AuthoredWordpressPageAuthorAuthoredWordpressPagePath = 'authored_wordpress__PAGE___author___authored_wordpress__PAGE___path',
  AuthoredWordpressPageAuthorAuthoredWordpressWpMedia = 'authored_wordpress__PAGE___author___authored_wordpress__wp_media',
  AuthoredWordpressPageAuthorAuthoredWordpressWpMediaId = 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___id',
  AuthoredWordpressPageAuthorAuthoredWordpressWpMediaChildren = 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___children',
  AuthoredWordpressPageAuthorAuthoredWordpressWpMediaWordpressId = 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___wordpress_id',
  AuthoredWordpressPageAuthorAuthoredWordpressWpMediaDate = 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___date',
  AuthoredWordpressPageAuthorAuthoredWordpressWpMediaModified = 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___modified',
  AuthoredWordpressPageAuthorAuthoredWordpressWpMediaSlug = 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___slug',
  AuthoredWordpressPageAuthorAuthoredWordpressWpMediaStatus = 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___status',
  AuthoredWordpressPageAuthorAuthoredWordpressWpMediaType = 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___type',
  AuthoredWordpressPageAuthorAuthoredWordpressWpMediaLink = 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___link',
  AuthoredWordpressPageAuthorAuthoredWordpressWpMediaTitle = 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___title',
  AuthoredWordpressPageAuthorAuthoredWordpressWpMediaCommentStatus = 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___comment_status',
  AuthoredWordpressPageAuthorAuthoredWordpressWpMediaPingStatus = 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___ping_status',
  AuthoredWordpressPageAuthorAuthoredWordpressWpMediaTemplate = 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___template',
  AuthoredWordpressPageAuthorAuthoredWordpressWpMediaDescription = 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___description',
  AuthoredWordpressPageAuthorAuthoredWordpressWpMediaCaption = 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___caption',
  AuthoredWordpressPageAuthorAuthoredWordpressWpMediaAltText = 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___alt_text',
  AuthoredWordpressPageAuthorAuthoredWordpressWpMediaMediaType = 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___media_type',
  AuthoredWordpressPageAuthorAuthoredWordpressWpMediaMimeType = 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___mime_type',
  AuthoredWordpressPageAuthorAuthoredWordpressWpMediaSourceUrl = 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___source_url',
  AuthoredWordpressPageAuthorAuthoredWordpressWpMediaPath = 'authored_wordpress__PAGE___author___authored_wordpress__wp_media___path',
  AuthoredWordpressPageAuthorPath = 'authored_wordpress__PAGE___author___path',
  AuthoredWordpressPageAuthorAuthoredWordpressPost = 'authored_wordpress__PAGE___author___authored_wordpress__POST',
  AuthoredWordpressPageAuthorAuthoredWordpressPostId = 'authored_wordpress__PAGE___author___authored_wordpress__POST___id',
  AuthoredWordpressPageAuthorAuthoredWordpressPostChildren = 'authored_wordpress__PAGE___author___authored_wordpress__POST___children',
  AuthoredWordpressPageAuthorAuthoredWordpressPostWordpressId = 'authored_wordpress__PAGE___author___authored_wordpress__POST___wordpress_id',
  AuthoredWordpressPageAuthorAuthoredWordpressPostDate = 'authored_wordpress__PAGE___author___authored_wordpress__POST___date',
  AuthoredWordpressPageAuthorAuthoredWordpressPostGuid = 'authored_wordpress__PAGE___author___authored_wordpress__POST___guid',
  AuthoredWordpressPageAuthorAuthoredWordpressPostModified = 'authored_wordpress__PAGE___author___authored_wordpress__POST___modified',
  AuthoredWordpressPageAuthorAuthoredWordpressPostSlug = 'authored_wordpress__PAGE___author___authored_wordpress__POST___slug',
  AuthoredWordpressPageAuthorAuthoredWordpressPostStatus = 'authored_wordpress__PAGE___author___authored_wordpress__POST___status',
  AuthoredWordpressPageAuthorAuthoredWordpressPostType = 'authored_wordpress__PAGE___author___authored_wordpress__POST___type',
  AuthoredWordpressPageAuthorAuthoredWordpressPostLink = 'authored_wordpress__PAGE___author___authored_wordpress__POST___link',
  AuthoredWordpressPageAuthorAuthoredWordpressPostTitle = 'authored_wordpress__PAGE___author___authored_wordpress__POST___title',
  AuthoredWordpressPageAuthorAuthoredWordpressPostContent = 'authored_wordpress__PAGE___author___authored_wordpress__POST___content',
  AuthoredWordpressPageAuthorAuthoredWordpressPostExcerpt = 'authored_wordpress__PAGE___author___authored_wordpress__POST___excerpt',
  AuthoredWordpressPageAuthorAuthoredWordpressPostCommentStatus = 'authored_wordpress__PAGE___author___authored_wordpress__POST___comment_status',
  AuthoredWordpressPageAuthorAuthoredWordpressPostPingStatus = 'authored_wordpress__PAGE___author___authored_wordpress__POST___ping_status',
  AuthoredWordpressPageAuthorAuthoredWordpressPostSticky = 'authored_wordpress__PAGE___author___authored_wordpress__POST___sticky',
  AuthoredWordpressPageAuthorAuthoredWordpressPostTemplate = 'authored_wordpress__PAGE___author___authored_wordpress__POST___template',
  AuthoredWordpressPageAuthorAuthoredWordpressPostFormat = 'authored_wordpress__PAGE___author___authored_wordpress__POST___format',
  AuthoredWordpressPageAuthorAuthoredWordpressPostCategories = 'authored_wordpress__PAGE___author___authored_wordpress__POST___categories',
  AuthoredWordpressPageAuthorAuthoredWordpressPostPath = 'authored_wordpress__PAGE___author___authored_wordpress__POST___path',
  AuthoredWordpressPageAuthorAuthoredWordpressPostTags = 'authored_wordpress__PAGE___author___authored_wordpress__POST___tags',
  AuthoredWordpressPagePath = 'authored_wordpress__PAGE___path',
  AuthoredWordpressWpMedia = 'authored_wordpress__wp_media',
  AuthoredWordpressWpMediaId = 'authored_wordpress__wp_media___id',
  AuthoredWordpressWpMediaParentId = 'authored_wordpress__wp_media___parent___id',
  AuthoredWordpressWpMediaParentParentId = 'authored_wordpress__wp_media___parent___parent___id',
  AuthoredWordpressWpMediaParentParentChildren = 'authored_wordpress__wp_media___parent___parent___children',
  AuthoredWordpressWpMediaParentChildren = 'authored_wordpress__wp_media___parent___children',
  AuthoredWordpressWpMediaParentChildrenId = 'authored_wordpress__wp_media___parent___children___id',
  AuthoredWordpressWpMediaParentChildrenChildren = 'authored_wordpress__wp_media___parent___children___children',
  AuthoredWordpressWpMediaParentInternalContent = 'authored_wordpress__wp_media___parent___internal___content',
  AuthoredWordpressWpMediaParentInternalContentDigest = 'authored_wordpress__wp_media___parent___internal___contentDigest',
  AuthoredWordpressWpMediaParentInternalDescription = 'authored_wordpress__wp_media___parent___internal___description',
  AuthoredWordpressWpMediaParentInternalFieldOwners = 'authored_wordpress__wp_media___parent___internal___fieldOwners',
  AuthoredWordpressWpMediaParentInternalIgnoreType = 'authored_wordpress__wp_media___parent___internal___ignoreType',
  AuthoredWordpressWpMediaParentInternalMediaType = 'authored_wordpress__wp_media___parent___internal___mediaType',
  AuthoredWordpressWpMediaParentInternalOwner = 'authored_wordpress__wp_media___parent___internal___owner',
  AuthoredWordpressWpMediaParentInternalType = 'authored_wordpress__wp_media___parent___internal___type',
  AuthoredWordpressWpMediaChildren = 'authored_wordpress__wp_media___children',
  AuthoredWordpressWpMediaChildrenId = 'authored_wordpress__wp_media___children___id',
  AuthoredWordpressWpMediaChildrenParentId = 'authored_wordpress__wp_media___children___parent___id',
  AuthoredWordpressWpMediaChildrenParentChildren = 'authored_wordpress__wp_media___children___parent___children',
  AuthoredWordpressWpMediaChildrenChildren = 'authored_wordpress__wp_media___children___children',
  AuthoredWordpressWpMediaChildrenChildrenId = 'authored_wordpress__wp_media___children___children___id',
  AuthoredWordpressWpMediaChildrenChildrenChildren = 'authored_wordpress__wp_media___children___children___children',
  AuthoredWordpressWpMediaChildrenInternalContent = 'authored_wordpress__wp_media___children___internal___content',
  AuthoredWordpressWpMediaChildrenInternalContentDigest = 'authored_wordpress__wp_media___children___internal___contentDigest',
  AuthoredWordpressWpMediaChildrenInternalDescription = 'authored_wordpress__wp_media___children___internal___description',
  AuthoredWordpressWpMediaChildrenInternalFieldOwners = 'authored_wordpress__wp_media___children___internal___fieldOwners',
  AuthoredWordpressWpMediaChildrenInternalIgnoreType = 'authored_wordpress__wp_media___children___internal___ignoreType',
  AuthoredWordpressWpMediaChildrenInternalMediaType = 'authored_wordpress__wp_media___children___internal___mediaType',
  AuthoredWordpressWpMediaChildrenInternalOwner = 'authored_wordpress__wp_media___children___internal___owner',
  AuthoredWordpressWpMediaChildrenInternalType = 'authored_wordpress__wp_media___children___internal___type',
  AuthoredWordpressWpMediaInternalContent = 'authored_wordpress__wp_media___internal___content',
  AuthoredWordpressWpMediaInternalContentDigest = 'authored_wordpress__wp_media___internal___contentDigest',
  AuthoredWordpressWpMediaInternalDescription = 'authored_wordpress__wp_media___internal___description',
  AuthoredWordpressWpMediaInternalFieldOwners = 'authored_wordpress__wp_media___internal___fieldOwners',
  AuthoredWordpressWpMediaInternalIgnoreType = 'authored_wordpress__wp_media___internal___ignoreType',
  AuthoredWordpressWpMediaInternalMediaType = 'authored_wordpress__wp_media___internal___mediaType',
  AuthoredWordpressWpMediaInternalOwner = 'authored_wordpress__wp_media___internal___owner',
  AuthoredWordpressWpMediaInternalType = 'authored_wordpress__wp_media___internal___type',
  AuthoredWordpressWpMediaWordpressId = 'authored_wordpress__wp_media___wordpress_id',
  AuthoredWordpressWpMediaDate = 'authored_wordpress__wp_media___date',
  AuthoredWordpressWpMediaModified = 'authored_wordpress__wp_media___modified',
  AuthoredWordpressWpMediaSlug = 'authored_wordpress__wp_media___slug',
  AuthoredWordpressWpMediaStatus = 'authored_wordpress__wp_media___status',
  AuthoredWordpressWpMediaType = 'authored_wordpress__wp_media___type',
  AuthoredWordpressWpMediaLink = 'authored_wordpress__wp_media___link',
  AuthoredWordpressWpMediaTitle = 'authored_wordpress__wp_media___title',
  AuthoredWordpressWpMediaCommentStatus = 'authored_wordpress__wp_media___comment_status',
  AuthoredWordpressWpMediaPingStatus = 'authored_wordpress__wp_media___ping_status',
  AuthoredWordpressWpMediaTemplate = 'authored_wordpress__wp_media___template',
  AuthoredWordpressWpMediaDescription = 'authored_wordpress__wp_media___description',
  AuthoredWordpressWpMediaCaption = 'authored_wordpress__wp_media___caption',
  AuthoredWordpressWpMediaAltText = 'authored_wordpress__wp_media___alt_text',
  AuthoredWordpressWpMediaMediaType = 'authored_wordpress__wp_media___media_type',
  AuthoredWordpressWpMediaMimeType = 'authored_wordpress__wp_media___mime_type',
  AuthoredWordpressWpMediaMediaDetailsWidth = 'authored_wordpress__wp_media___media_details___width',
  AuthoredWordpressWpMediaMediaDetailsHeight = 'authored_wordpress__wp_media___media_details___height',
  AuthoredWordpressWpMediaMediaDetailsFile = 'authored_wordpress__wp_media___media_details___file',
  AuthoredWordpressWpMediaMediaDetailsImageMetaAperture = 'authored_wordpress__wp_media___media_details___image_meta___aperture',
  AuthoredWordpressWpMediaMediaDetailsImageMetaCredit = 'authored_wordpress__wp_media___media_details___image_meta___credit',
  AuthoredWordpressWpMediaMediaDetailsImageMetaCamera = 'authored_wordpress__wp_media___media_details___image_meta___camera',
  AuthoredWordpressWpMediaMediaDetailsImageMetaCaption = 'authored_wordpress__wp_media___media_details___image_meta___caption',
  AuthoredWordpressWpMediaMediaDetailsImageMetaCreatedTimestamp = 'authored_wordpress__wp_media___media_details___image_meta___created_timestamp',
  AuthoredWordpressWpMediaMediaDetailsImageMetaCopyright = 'authored_wordpress__wp_media___media_details___image_meta___copyright',
  AuthoredWordpressWpMediaMediaDetailsImageMetaFocalLength = 'authored_wordpress__wp_media___media_details___image_meta___focal_length',
  AuthoredWordpressWpMediaMediaDetailsImageMetaIso = 'authored_wordpress__wp_media___media_details___image_meta___iso',
  AuthoredWordpressWpMediaMediaDetailsImageMetaShutterSpeed = 'authored_wordpress__wp_media___media_details___image_meta___shutter_speed',
  AuthoredWordpressWpMediaMediaDetailsImageMetaTitle = 'authored_wordpress__wp_media___media_details___image_meta___title',
  AuthoredWordpressWpMediaMediaDetailsImageMetaOrientation = 'authored_wordpress__wp_media___media_details___image_meta___orientation',
  AuthoredWordpressWpMediaMediaDetailsOriginalImage = 'authored_wordpress__wp_media___media_details___original_image',
  AuthoredWordpressWpMediaSourceUrl = 'authored_wordpress__wp_media___source_url',
  AuthoredWordpressWpMediaLinksSelf = 'authored_wordpress__wp_media____links___self',
  AuthoredWordpressWpMediaLinksSelfHref = 'authored_wordpress__wp_media____links___self___href',
  AuthoredWordpressWpMediaLinksCollection = 'authored_wordpress__wp_media____links___collection',
  AuthoredWordpressWpMediaLinksCollectionHref = 'authored_wordpress__wp_media____links___collection___href',
  AuthoredWordpressWpMediaLinksAbout = 'authored_wordpress__wp_media____links___about',
  AuthoredWordpressWpMediaLinksAboutHref = 'authored_wordpress__wp_media____links___about___href',
  AuthoredWordpressWpMediaLinksAuthor = 'authored_wordpress__wp_media____links___author',
  AuthoredWordpressWpMediaLinksAuthorEmbeddable = 'authored_wordpress__wp_media____links___author___embeddable',
  AuthoredWordpressWpMediaLinksAuthorHref = 'authored_wordpress__wp_media____links___author___href',
  AuthoredWordpressWpMediaLinksReplies = 'authored_wordpress__wp_media____links___replies',
  AuthoredWordpressWpMediaLinksRepliesEmbeddable = 'authored_wordpress__wp_media____links___replies___embeddable',
  AuthoredWordpressWpMediaLinksRepliesHref = 'authored_wordpress__wp_media____links___replies___href',
  AuthoredWordpressWpMediaAuthorId = 'authored_wordpress__wp_media___author___id',
  AuthoredWordpressWpMediaAuthorParentId = 'authored_wordpress__wp_media___author___parent___id',
  AuthoredWordpressWpMediaAuthorParentChildren = 'authored_wordpress__wp_media___author___parent___children',
  AuthoredWordpressWpMediaAuthorChildren = 'authored_wordpress__wp_media___author___children',
  AuthoredWordpressWpMediaAuthorChildrenId = 'authored_wordpress__wp_media___author___children___id',
  AuthoredWordpressWpMediaAuthorChildrenChildren = 'authored_wordpress__wp_media___author___children___children',
  AuthoredWordpressWpMediaAuthorInternalContent = 'authored_wordpress__wp_media___author___internal___content',
  AuthoredWordpressWpMediaAuthorInternalContentDigest = 'authored_wordpress__wp_media___author___internal___contentDigest',
  AuthoredWordpressWpMediaAuthorInternalDescription = 'authored_wordpress__wp_media___author___internal___description',
  AuthoredWordpressWpMediaAuthorInternalFieldOwners = 'authored_wordpress__wp_media___author___internal___fieldOwners',
  AuthoredWordpressWpMediaAuthorInternalIgnoreType = 'authored_wordpress__wp_media___author___internal___ignoreType',
  AuthoredWordpressWpMediaAuthorInternalMediaType = 'authored_wordpress__wp_media___author___internal___mediaType',
  AuthoredWordpressWpMediaAuthorInternalOwner = 'authored_wordpress__wp_media___author___internal___owner',
  AuthoredWordpressWpMediaAuthorInternalType = 'authored_wordpress__wp_media___author___internal___type',
  AuthoredWordpressWpMediaAuthorWordpressId = 'authored_wordpress__wp_media___author___wordpress_id',
  AuthoredWordpressWpMediaAuthorName = 'authored_wordpress__wp_media___author___name',
  AuthoredWordpressWpMediaAuthorUrl = 'authored_wordpress__wp_media___author___url',
  AuthoredWordpressWpMediaAuthorDescription = 'authored_wordpress__wp_media___author___description',
  AuthoredWordpressWpMediaAuthorLink = 'authored_wordpress__wp_media___author___link',
  AuthoredWordpressWpMediaAuthorSlug = 'authored_wordpress__wp_media___author___slug',
  AuthoredWordpressWpMediaAuthorAvatarUrlsWordpress_24 = 'authored_wordpress__wp_media___author___avatar_urls___wordpress_24',
  AuthoredWordpressWpMediaAuthorAvatarUrlsWordpress_48 = 'authored_wordpress__wp_media___author___avatar_urls___wordpress_48',
  AuthoredWordpressWpMediaAuthorAvatarUrlsWordpress_96 = 'authored_wordpress__wp_media___author___avatar_urls___wordpress_96',
  AuthoredWordpressWpMediaAuthorLinksSelf = 'authored_wordpress__wp_media___author____links___self',
  AuthoredWordpressWpMediaAuthorLinksCollection = 'authored_wordpress__wp_media___author____links___collection',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPage = 'authored_wordpress__wp_media___author___authored_wordpress__PAGE',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPageId = 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___id',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPageChildren = 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___children',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPageWordpressId = 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___wordpress_id',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPageDate = 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___date',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPageGuid = 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___guid',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPageModified = 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___modified',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPageSlug = 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___slug',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPageStatus = 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___status',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPageType = 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___type',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPageLink = 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___link',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPageTitle = 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___title',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPageContent = 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___content',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPageExcerpt = 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___excerpt',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPageWordpressParent = 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___wordpress_parent',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPageMenuOrder = 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___menu_order',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPageCommentStatus = 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___comment_status',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPagePingStatus = 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___ping_status',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPageTemplate = 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___template',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPagePath = 'authored_wordpress__wp_media___author___authored_wordpress__PAGE___path',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressWpMedia = 'authored_wordpress__wp_media___author___authored_wordpress__wp_media',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressWpMediaId = 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___id',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressWpMediaChildren = 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___children',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressWpMediaWordpressId = 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___wordpress_id',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressWpMediaDate = 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___date',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressWpMediaModified = 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___modified',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressWpMediaSlug = 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___slug',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressWpMediaStatus = 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___status',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressWpMediaType = 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___type',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressWpMediaLink = 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___link',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressWpMediaTitle = 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___title',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressWpMediaCommentStatus = 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___comment_status',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressWpMediaPingStatus = 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___ping_status',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressWpMediaTemplate = 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___template',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressWpMediaDescription = 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___description',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressWpMediaCaption = 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___caption',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressWpMediaAltText = 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___alt_text',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressWpMediaMediaType = 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___media_type',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressWpMediaMimeType = 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___mime_type',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressWpMediaSourceUrl = 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___source_url',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressWpMediaPath = 'authored_wordpress__wp_media___author___authored_wordpress__wp_media___path',
  AuthoredWordpressWpMediaAuthorPath = 'authored_wordpress__wp_media___author___path',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPost = 'authored_wordpress__wp_media___author___authored_wordpress__POST',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPostId = 'authored_wordpress__wp_media___author___authored_wordpress__POST___id',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPostChildren = 'authored_wordpress__wp_media___author___authored_wordpress__POST___children',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPostWordpressId = 'authored_wordpress__wp_media___author___authored_wordpress__POST___wordpress_id',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPostDate = 'authored_wordpress__wp_media___author___authored_wordpress__POST___date',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPostGuid = 'authored_wordpress__wp_media___author___authored_wordpress__POST___guid',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPostModified = 'authored_wordpress__wp_media___author___authored_wordpress__POST___modified',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPostSlug = 'authored_wordpress__wp_media___author___authored_wordpress__POST___slug',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPostStatus = 'authored_wordpress__wp_media___author___authored_wordpress__POST___status',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPostType = 'authored_wordpress__wp_media___author___authored_wordpress__POST___type',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPostLink = 'authored_wordpress__wp_media___author___authored_wordpress__POST___link',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPostTitle = 'authored_wordpress__wp_media___author___authored_wordpress__POST___title',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPostContent = 'authored_wordpress__wp_media___author___authored_wordpress__POST___content',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPostExcerpt = 'authored_wordpress__wp_media___author___authored_wordpress__POST___excerpt',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPostCommentStatus = 'authored_wordpress__wp_media___author___authored_wordpress__POST___comment_status',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPostPingStatus = 'authored_wordpress__wp_media___author___authored_wordpress__POST___ping_status',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPostSticky = 'authored_wordpress__wp_media___author___authored_wordpress__POST___sticky',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPostTemplate = 'authored_wordpress__wp_media___author___authored_wordpress__POST___template',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPostFormat = 'authored_wordpress__wp_media___author___authored_wordpress__POST___format',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPostCategories = 'authored_wordpress__wp_media___author___authored_wordpress__POST___categories',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPostPath = 'authored_wordpress__wp_media___author___authored_wordpress__POST___path',
  AuthoredWordpressWpMediaAuthorAuthoredWordpressPostTags = 'authored_wordpress__wp_media___author___authored_wordpress__POST___tags',
  AuthoredWordpressWpMediaGuidId = 'authored_wordpress__wp_media___guid___id',
  AuthoredWordpressWpMediaGuidParentId = 'authored_wordpress__wp_media___guid___parent___id',
  AuthoredWordpressWpMediaGuidParentChildren = 'authored_wordpress__wp_media___guid___parent___children',
  AuthoredWordpressWpMediaGuidChildren = 'authored_wordpress__wp_media___guid___children',
  AuthoredWordpressWpMediaGuidChildrenId = 'authored_wordpress__wp_media___guid___children___id',
  AuthoredWordpressWpMediaGuidChildrenChildren = 'authored_wordpress__wp_media___guid___children___children',
  AuthoredWordpressWpMediaGuidInternalContent = 'authored_wordpress__wp_media___guid___internal___content',
  AuthoredWordpressWpMediaGuidInternalContentDigest = 'authored_wordpress__wp_media___guid___internal___contentDigest',
  AuthoredWordpressWpMediaGuidInternalDescription = 'authored_wordpress__wp_media___guid___internal___description',
  AuthoredWordpressWpMediaGuidInternalFieldOwners = 'authored_wordpress__wp_media___guid___internal___fieldOwners',
  AuthoredWordpressWpMediaGuidInternalIgnoreType = 'authored_wordpress__wp_media___guid___internal___ignoreType',
  AuthoredWordpressWpMediaGuidInternalMediaType = 'authored_wordpress__wp_media___guid___internal___mediaType',
  AuthoredWordpressWpMediaGuidInternalOwner = 'authored_wordpress__wp_media___guid___internal___owner',
  AuthoredWordpressWpMediaGuidInternalType = 'authored_wordpress__wp_media___guid___internal___type',
  AuthoredWordpressWpMediaGuidWordpressId = 'authored_wordpress__wp_media___guid___wordpress_id',
  AuthoredWordpressWpMediaGuidDate = 'authored_wordpress__wp_media___guid___date',
  AuthoredWordpressWpMediaGuidModified = 'authored_wordpress__wp_media___guid___modified',
  AuthoredWordpressWpMediaGuidSlug = 'authored_wordpress__wp_media___guid___slug',
  AuthoredWordpressWpMediaGuidStatus = 'authored_wordpress__wp_media___guid___status',
  AuthoredWordpressWpMediaGuidType = 'authored_wordpress__wp_media___guid___type',
  AuthoredWordpressWpMediaGuidLink = 'authored_wordpress__wp_media___guid___link',
  AuthoredWordpressWpMediaGuidTitle = 'authored_wordpress__wp_media___guid___title',
  AuthoredWordpressWpMediaGuidCommentStatus = 'authored_wordpress__wp_media___guid___comment_status',
  AuthoredWordpressWpMediaGuidPingStatus = 'authored_wordpress__wp_media___guid___ping_status',
  AuthoredWordpressWpMediaGuidTemplate = 'authored_wordpress__wp_media___guid___template',
  AuthoredWordpressWpMediaGuidDescription = 'authored_wordpress__wp_media___guid___description',
  AuthoredWordpressWpMediaGuidCaption = 'authored_wordpress__wp_media___guid___caption',
  AuthoredWordpressWpMediaGuidAltText = 'authored_wordpress__wp_media___guid___alt_text',
  AuthoredWordpressWpMediaGuidMediaType = 'authored_wordpress__wp_media___guid___media_type',
  AuthoredWordpressWpMediaGuidMimeType = 'authored_wordpress__wp_media___guid___mime_type',
  AuthoredWordpressWpMediaGuidMediaDetailsWidth = 'authored_wordpress__wp_media___guid___media_details___width',
  AuthoredWordpressWpMediaGuidMediaDetailsHeight = 'authored_wordpress__wp_media___guid___media_details___height',
  AuthoredWordpressWpMediaGuidMediaDetailsFile = 'authored_wordpress__wp_media___guid___media_details___file',
  AuthoredWordpressWpMediaGuidMediaDetailsOriginalImage = 'authored_wordpress__wp_media___guid___media_details___original_image',
  AuthoredWordpressWpMediaGuidSourceUrl = 'authored_wordpress__wp_media___guid___source_url',
  AuthoredWordpressWpMediaGuidLinksSelf = 'authored_wordpress__wp_media___guid____links___self',
  AuthoredWordpressWpMediaGuidLinksCollection = 'authored_wordpress__wp_media___guid____links___collection',
  AuthoredWordpressWpMediaGuidLinksAbout = 'authored_wordpress__wp_media___guid____links___about',
  AuthoredWordpressWpMediaGuidLinksAuthor = 'authored_wordpress__wp_media___guid____links___author',
  AuthoredWordpressWpMediaGuidLinksReplies = 'authored_wordpress__wp_media___guid____links___replies',
  AuthoredWordpressWpMediaGuidAuthorId = 'authored_wordpress__wp_media___guid___author___id',
  AuthoredWordpressWpMediaGuidAuthorChildren = 'authored_wordpress__wp_media___guid___author___children',
  AuthoredWordpressWpMediaGuidAuthorWordpressId = 'authored_wordpress__wp_media___guid___author___wordpress_id',
  AuthoredWordpressWpMediaGuidAuthorName = 'authored_wordpress__wp_media___guid___author___name',
  AuthoredWordpressWpMediaGuidAuthorUrl = 'authored_wordpress__wp_media___guid___author___url',
  AuthoredWordpressWpMediaGuidAuthorDescription = 'authored_wordpress__wp_media___guid___author___description',
  AuthoredWordpressWpMediaGuidAuthorLink = 'authored_wordpress__wp_media___guid___author___link',
  AuthoredWordpressWpMediaGuidAuthorSlug = 'authored_wordpress__wp_media___guid___author___slug',
  AuthoredWordpressWpMediaGuidAuthorAuthoredWordpressPage = 'authored_wordpress__wp_media___guid___author___authored_wordpress__PAGE',
  AuthoredWordpressWpMediaGuidAuthorAuthoredWordpressWpMedia = 'authored_wordpress__wp_media___guid___author___authored_wordpress__wp_media',
  AuthoredWordpressWpMediaGuidAuthorPath = 'authored_wordpress__wp_media___guid___author___path',
  AuthoredWordpressWpMediaGuidAuthorAuthoredWordpressPost = 'authored_wordpress__wp_media___guid___author___authored_wordpress__POST',
  AuthoredWordpressWpMediaGuidGuidId = 'authored_wordpress__wp_media___guid___guid___id',
  AuthoredWordpressWpMediaGuidGuidChildren = 'authored_wordpress__wp_media___guid___guid___children',
  AuthoredWordpressWpMediaGuidGuidWordpressId = 'authored_wordpress__wp_media___guid___guid___wordpress_id',
  AuthoredWordpressWpMediaGuidGuidDate = 'authored_wordpress__wp_media___guid___guid___date',
  AuthoredWordpressWpMediaGuidGuidModified = 'authored_wordpress__wp_media___guid___guid___modified',
  AuthoredWordpressWpMediaGuidGuidSlug = 'authored_wordpress__wp_media___guid___guid___slug',
  AuthoredWordpressWpMediaGuidGuidStatus = 'authored_wordpress__wp_media___guid___guid___status',
  AuthoredWordpressWpMediaGuidGuidType = 'authored_wordpress__wp_media___guid___guid___type',
  AuthoredWordpressWpMediaGuidGuidLink = 'authored_wordpress__wp_media___guid___guid___link',
  AuthoredWordpressWpMediaGuidGuidTitle = 'authored_wordpress__wp_media___guid___guid___title',
  AuthoredWordpressWpMediaGuidGuidCommentStatus = 'authored_wordpress__wp_media___guid___guid___comment_status',
  AuthoredWordpressWpMediaGuidGuidPingStatus = 'authored_wordpress__wp_media___guid___guid___ping_status',
  AuthoredWordpressWpMediaGuidGuidTemplate = 'authored_wordpress__wp_media___guid___guid___template',
  AuthoredWordpressWpMediaGuidGuidDescription = 'authored_wordpress__wp_media___guid___guid___description',
  AuthoredWordpressWpMediaGuidGuidCaption = 'authored_wordpress__wp_media___guid___guid___caption',
  AuthoredWordpressWpMediaGuidGuidAltText = 'authored_wordpress__wp_media___guid___guid___alt_text',
  AuthoredWordpressWpMediaGuidGuidMediaType = 'authored_wordpress__wp_media___guid___guid___media_type',
  AuthoredWordpressWpMediaGuidGuidMimeType = 'authored_wordpress__wp_media___guid___guid___mime_type',
  AuthoredWordpressWpMediaGuidGuidSourceUrl = 'authored_wordpress__wp_media___guid___guid___source_url',
  AuthoredWordpressWpMediaGuidGuidPath = 'authored_wordpress__wp_media___guid___guid___path',
  AuthoredWordpressWpMediaGuidLocalFileSourceInstanceName = 'authored_wordpress__wp_media___guid___localFile___sourceInstanceName',
  AuthoredWordpressWpMediaGuidLocalFileAbsolutePath = 'authored_wordpress__wp_media___guid___localFile___absolutePath',
  AuthoredWordpressWpMediaGuidLocalFileRelativePath = 'authored_wordpress__wp_media___guid___localFile___relativePath',
  AuthoredWordpressWpMediaGuidLocalFileExtension = 'authored_wordpress__wp_media___guid___localFile___extension',
  AuthoredWordpressWpMediaGuidLocalFileSize = 'authored_wordpress__wp_media___guid___localFile___size',
  AuthoredWordpressWpMediaGuidLocalFilePrettySize = 'authored_wordpress__wp_media___guid___localFile___prettySize',
  AuthoredWordpressWpMediaGuidLocalFileModifiedTime = 'authored_wordpress__wp_media___guid___localFile___modifiedTime',
  AuthoredWordpressWpMediaGuidLocalFileAccessTime = 'authored_wordpress__wp_media___guid___localFile___accessTime',
  AuthoredWordpressWpMediaGuidLocalFileChangeTime = 'authored_wordpress__wp_media___guid___localFile___changeTime',
  AuthoredWordpressWpMediaGuidLocalFileBirthTime = 'authored_wordpress__wp_media___guid___localFile___birthTime',
  AuthoredWordpressWpMediaGuidLocalFileRoot = 'authored_wordpress__wp_media___guid___localFile___root',
  AuthoredWordpressWpMediaGuidLocalFileDir = 'authored_wordpress__wp_media___guid___localFile___dir',
  AuthoredWordpressWpMediaGuidLocalFileBase = 'authored_wordpress__wp_media___guid___localFile___base',
  AuthoredWordpressWpMediaGuidLocalFileExt = 'authored_wordpress__wp_media___guid___localFile___ext',
  AuthoredWordpressWpMediaGuidLocalFileName = 'authored_wordpress__wp_media___guid___localFile___name',
  AuthoredWordpressWpMediaGuidLocalFileRelativeDirectory = 'authored_wordpress__wp_media___guid___localFile___relativeDirectory',
  AuthoredWordpressWpMediaGuidLocalFileDev = 'authored_wordpress__wp_media___guid___localFile___dev',
  AuthoredWordpressWpMediaGuidLocalFileMode = 'authored_wordpress__wp_media___guid___localFile___mode',
  AuthoredWordpressWpMediaGuidLocalFileNlink = 'authored_wordpress__wp_media___guid___localFile___nlink',
  AuthoredWordpressWpMediaGuidLocalFileUid = 'authored_wordpress__wp_media___guid___localFile___uid',
  AuthoredWordpressWpMediaGuidLocalFileGid = 'authored_wordpress__wp_media___guid___localFile___gid',
  AuthoredWordpressWpMediaGuidLocalFileRdev = 'authored_wordpress__wp_media___guid___localFile___rdev',
  AuthoredWordpressWpMediaGuidLocalFileIno = 'authored_wordpress__wp_media___guid___localFile___ino',
  AuthoredWordpressWpMediaGuidLocalFileAtimeMs = 'authored_wordpress__wp_media___guid___localFile___atimeMs',
  AuthoredWordpressWpMediaGuidLocalFileMtimeMs = 'authored_wordpress__wp_media___guid___localFile___mtimeMs',
  AuthoredWordpressWpMediaGuidLocalFileCtimeMs = 'authored_wordpress__wp_media___guid___localFile___ctimeMs',
  AuthoredWordpressWpMediaGuidLocalFileAtime = 'authored_wordpress__wp_media___guid___localFile___atime',
  AuthoredWordpressWpMediaGuidLocalFileMtime = 'authored_wordpress__wp_media___guid___localFile___mtime',
  AuthoredWordpressWpMediaGuidLocalFileCtime = 'authored_wordpress__wp_media___guid___localFile___ctime',
  AuthoredWordpressWpMediaGuidLocalFileBirthtime = 'authored_wordpress__wp_media___guid___localFile___birthtime',
  AuthoredWordpressWpMediaGuidLocalFileBirthtimeMs = 'authored_wordpress__wp_media___guid___localFile___birthtimeMs',
  AuthoredWordpressWpMediaGuidLocalFileBlksize = 'authored_wordpress__wp_media___guid___localFile___blksize',
  AuthoredWordpressWpMediaGuidLocalFileBlocks = 'authored_wordpress__wp_media___guid___localFile___blocks',
  AuthoredWordpressWpMediaGuidLocalFileUrl = 'authored_wordpress__wp_media___guid___localFile___url',
  AuthoredWordpressWpMediaGuidLocalFileId = 'authored_wordpress__wp_media___guid___localFile___id',
  AuthoredWordpressWpMediaGuidLocalFileChildren = 'authored_wordpress__wp_media___guid___localFile___children',
  AuthoredWordpressWpMediaGuidPath = 'authored_wordpress__wp_media___guid___path',
  AuthoredWordpressWpMediaLocalFileSourceInstanceName = 'authored_wordpress__wp_media___localFile___sourceInstanceName',
  AuthoredWordpressWpMediaLocalFileAbsolutePath = 'authored_wordpress__wp_media___localFile___absolutePath',
  AuthoredWordpressWpMediaLocalFileRelativePath = 'authored_wordpress__wp_media___localFile___relativePath',
  AuthoredWordpressWpMediaLocalFileExtension = 'authored_wordpress__wp_media___localFile___extension',
  AuthoredWordpressWpMediaLocalFileSize = 'authored_wordpress__wp_media___localFile___size',
  AuthoredWordpressWpMediaLocalFilePrettySize = 'authored_wordpress__wp_media___localFile___prettySize',
  AuthoredWordpressWpMediaLocalFileModifiedTime = 'authored_wordpress__wp_media___localFile___modifiedTime',
  AuthoredWordpressWpMediaLocalFileAccessTime = 'authored_wordpress__wp_media___localFile___accessTime',
  AuthoredWordpressWpMediaLocalFileChangeTime = 'authored_wordpress__wp_media___localFile___changeTime',
  AuthoredWordpressWpMediaLocalFileBirthTime = 'authored_wordpress__wp_media___localFile___birthTime',
  AuthoredWordpressWpMediaLocalFileRoot = 'authored_wordpress__wp_media___localFile___root',
  AuthoredWordpressWpMediaLocalFileDir = 'authored_wordpress__wp_media___localFile___dir',
  AuthoredWordpressWpMediaLocalFileBase = 'authored_wordpress__wp_media___localFile___base',
  AuthoredWordpressWpMediaLocalFileExt = 'authored_wordpress__wp_media___localFile___ext',
  AuthoredWordpressWpMediaLocalFileName = 'authored_wordpress__wp_media___localFile___name',
  AuthoredWordpressWpMediaLocalFileRelativeDirectory = 'authored_wordpress__wp_media___localFile___relativeDirectory',
  AuthoredWordpressWpMediaLocalFileDev = 'authored_wordpress__wp_media___localFile___dev',
  AuthoredWordpressWpMediaLocalFileMode = 'authored_wordpress__wp_media___localFile___mode',
  AuthoredWordpressWpMediaLocalFileNlink = 'authored_wordpress__wp_media___localFile___nlink',
  AuthoredWordpressWpMediaLocalFileUid = 'authored_wordpress__wp_media___localFile___uid',
  AuthoredWordpressWpMediaLocalFileGid = 'authored_wordpress__wp_media___localFile___gid',
  AuthoredWordpressWpMediaLocalFileRdev = 'authored_wordpress__wp_media___localFile___rdev',
  AuthoredWordpressWpMediaLocalFileIno = 'authored_wordpress__wp_media___localFile___ino',
  AuthoredWordpressWpMediaLocalFileAtimeMs = 'authored_wordpress__wp_media___localFile___atimeMs',
  AuthoredWordpressWpMediaLocalFileMtimeMs = 'authored_wordpress__wp_media___localFile___mtimeMs',
  AuthoredWordpressWpMediaLocalFileCtimeMs = 'authored_wordpress__wp_media___localFile___ctimeMs',
  AuthoredWordpressWpMediaLocalFileAtime = 'authored_wordpress__wp_media___localFile___atime',
  AuthoredWordpressWpMediaLocalFileMtime = 'authored_wordpress__wp_media___localFile___mtime',
  AuthoredWordpressWpMediaLocalFileCtime = 'authored_wordpress__wp_media___localFile___ctime',
  AuthoredWordpressWpMediaLocalFileBirthtime = 'authored_wordpress__wp_media___localFile___birthtime',
  AuthoredWordpressWpMediaLocalFileBirthtimeMs = 'authored_wordpress__wp_media___localFile___birthtimeMs',
  AuthoredWordpressWpMediaLocalFileBlksize = 'authored_wordpress__wp_media___localFile___blksize',
  AuthoredWordpressWpMediaLocalFileBlocks = 'authored_wordpress__wp_media___localFile___blocks',
  AuthoredWordpressWpMediaLocalFileUrl = 'authored_wordpress__wp_media___localFile___url',
  AuthoredWordpressWpMediaLocalFileChildImageSharpId = 'authored_wordpress__wp_media___localFile___childImageSharp___id',
  AuthoredWordpressWpMediaLocalFileChildImageSharpChildren = 'authored_wordpress__wp_media___localFile___childImageSharp___children',
  AuthoredWordpressWpMediaLocalFileId = 'authored_wordpress__wp_media___localFile___id',
  AuthoredWordpressWpMediaLocalFileParentId = 'authored_wordpress__wp_media___localFile___parent___id',
  AuthoredWordpressWpMediaLocalFileParentChildren = 'authored_wordpress__wp_media___localFile___parent___children',
  AuthoredWordpressWpMediaLocalFileChildren = 'authored_wordpress__wp_media___localFile___children',
  AuthoredWordpressWpMediaLocalFileChildrenId = 'authored_wordpress__wp_media___localFile___children___id',
  AuthoredWordpressWpMediaLocalFileChildrenChildren = 'authored_wordpress__wp_media___localFile___children___children',
  AuthoredWordpressWpMediaLocalFileInternalContent = 'authored_wordpress__wp_media___localFile___internal___content',
  AuthoredWordpressWpMediaLocalFileInternalContentDigest = 'authored_wordpress__wp_media___localFile___internal___contentDigest',
  AuthoredWordpressWpMediaLocalFileInternalDescription = 'authored_wordpress__wp_media___localFile___internal___description',
  AuthoredWordpressWpMediaLocalFileInternalFieldOwners = 'authored_wordpress__wp_media___localFile___internal___fieldOwners',
  AuthoredWordpressWpMediaLocalFileInternalIgnoreType = 'authored_wordpress__wp_media___localFile___internal___ignoreType',
  AuthoredWordpressWpMediaLocalFileInternalMediaType = 'authored_wordpress__wp_media___localFile___internal___mediaType',
  AuthoredWordpressWpMediaLocalFileInternalOwner = 'authored_wordpress__wp_media___localFile___internal___owner',
  AuthoredWordpressWpMediaLocalFileInternalType = 'authored_wordpress__wp_media___localFile___internal___type',
  AuthoredWordpressWpMediaPath = 'authored_wordpress__wp_media___path',
  Path = 'path',
  AuthoredWordpressPost = 'authored_wordpress__POST',
  AuthoredWordpressPostId = 'authored_wordpress__POST___id',
  AuthoredWordpressPostParentId = 'authored_wordpress__POST___parent___id',
  AuthoredWordpressPostParentParentId = 'authored_wordpress__POST___parent___parent___id',
  AuthoredWordpressPostParentParentChildren = 'authored_wordpress__POST___parent___parent___children',
  AuthoredWordpressPostParentChildren = 'authored_wordpress__POST___parent___children',
  AuthoredWordpressPostParentChildrenId = 'authored_wordpress__POST___parent___children___id',
  AuthoredWordpressPostParentChildrenChildren = 'authored_wordpress__POST___parent___children___children',
  AuthoredWordpressPostParentInternalContent = 'authored_wordpress__POST___parent___internal___content',
  AuthoredWordpressPostParentInternalContentDigest = 'authored_wordpress__POST___parent___internal___contentDigest',
  AuthoredWordpressPostParentInternalDescription = 'authored_wordpress__POST___parent___internal___description',
  AuthoredWordpressPostParentInternalFieldOwners = 'authored_wordpress__POST___parent___internal___fieldOwners',
  AuthoredWordpressPostParentInternalIgnoreType = 'authored_wordpress__POST___parent___internal___ignoreType',
  AuthoredWordpressPostParentInternalMediaType = 'authored_wordpress__POST___parent___internal___mediaType',
  AuthoredWordpressPostParentInternalOwner = 'authored_wordpress__POST___parent___internal___owner',
  AuthoredWordpressPostParentInternalType = 'authored_wordpress__POST___parent___internal___type',
  AuthoredWordpressPostChildren = 'authored_wordpress__POST___children',
  AuthoredWordpressPostChildrenId = 'authored_wordpress__POST___children___id',
  AuthoredWordpressPostChildrenParentId = 'authored_wordpress__POST___children___parent___id',
  AuthoredWordpressPostChildrenParentChildren = 'authored_wordpress__POST___children___parent___children',
  AuthoredWordpressPostChildrenChildren = 'authored_wordpress__POST___children___children',
  AuthoredWordpressPostChildrenChildrenId = 'authored_wordpress__POST___children___children___id',
  AuthoredWordpressPostChildrenChildrenChildren = 'authored_wordpress__POST___children___children___children',
  AuthoredWordpressPostChildrenInternalContent = 'authored_wordpress__POST___children___internal___content',
  AuthoredWordpressPostChildrenInternalContentDigest = 'authored_wordpress__POST___children___internal___contentDigest',
  AuthoredWordpressPostChildrenInternalDescription = 'authored_wordpress__POST___children___internal___description',
  AuthoredWordpressPostChildrenInternalFieldOwners = 'authored_wordpress__POST___children___internal___fieldOwners',
  AuthoredWordpressPostChildrenInternalIgnoreType = 'authored_wordpress__POST___children___internal___ignoreType',
  AuthoredWordpressPostChildrenInternalMediaType = 'authored_wordpress__POST___children___internal___mediaType',
  AuthoredWordpressPostChildrenInternalOwner = 'authored_wordpress__POST___children___internal___owner',
  AuthoredWordpressPostChildrenInternalType = 'authored_wordpress__POST___children___internal___type',
  AuthoredWordpressPostInternalContent = 'authored_wordpress__POST___internal___content',
  AuthoredWordpressPostInternalContentDigest = 'authored_wordpress__POST___internal___contentDigest',
  AuthoredWordpressPostInternalDescription = 'authored_wordpress__POST___internal___description',
  AuthoredWordpressPostInternalFieldOwners = 'authored_wordpress__POST___internal___fieldOwners',
  AuthoredWordpressPostInternalIgnoreType = 'authored_wordpress__POST___internal___ignoreType',
  AuthoredWordpressPostInternalMediaType = 'authored_wordpress__POST___internal___mediaType',
  AuthoredWordpressPostInternalOwner = 'authored_wordpress__POST___internal___owner',
  AuthoredWordpressPostInternalType = 'authored_wordpress__POST___internal___type',
  AuthoredWordpressPostWordpressId = 'authored_wordpress__POST___wordpress_id',
  AuthoredWordpressPostDate = 'authored_wordpress__POST___date',
  AuthoredWordpressPostGuid = 'authored_wordpress__POST___guid',
  AuthoredWordpressPostModified = 'authored_wordpress__POST___modified',
  AuthoredWordpressPostSlug = 'authored_wordpress__POST___slug',
  AuthoredWordpressPostStatus = 'authored_wordpress__POST___status',
  AuthoredWordpressPostType = 'authored_wordpress__POST___type',
  AuthoredWordpressPostLink = 'authored_wordpress__POST___link',
  AuthoredWordpressPostTitle = 'authored_wordpress__POST___title',
  AuthoredWordpressPostContent = 'authored_wordpress__POST___content',
  AuthoredWordpressPostExcerpt = 'authored_wordpress__POST___excerpt',
  AuthoredWordpressPostCommentStatus = 'authored_wordpress__POST___comment_status',
  AuthoredWordpressPostPingStatus = 'authored_wordpress__POST___ping_status',
  AuthoredWordpressPostSticky = 'authored_wordpress__POST___sticky',
  AuthoredWordpressPostTemplate = 'authored_wordpress__POST___template',
  AuthoredWordpressPostFormat = 'authored_wordpress__POST___format',
  AuthoredWordpressPostLinksSelf = 'authored_wordpress__POST____links___self',
  AuthoredWordpressPostLinksSelfHref = 'authored_wordpress__POST____links___self___href',
  AuthoredWordpressPostLinksCollection = 'authored_wordpress__POST____links___collection',
  AuthoredWordpressPostLinksCollectionHref = 'authored_wordpress__POST____links___collection___href',
  AuthoredWordpressPostLinksAbout = 'authored_wordpress__POST____links___about',
  AuthoredWordpressPostLinksAboutHref = 'authored_wordpress__POST____links___about___href',
  AuthoredWordpressPostLinksAuthor = 'authored_wordpress__POST____links___author',
  AuthoredWordpressPostLinksAuthorEmbeddable = 'authored_wordpress__POST____links___author___embeddable',
  AuthoredWordpressPostLinksAuthorHref = 'authored_wordpress__POST____links___author___href',
  AuthoredWordpressPostLinksReplies = 'authored_wordpress__POST____links___replies',
  AuthoredWordpressPostLinksRepliesEmbeddable = 'authored_wordpress__POST____links___replies___embeddable',
  AuthoredWordpressPostLinksRepliesHref = 'authored_wordpress__POST____links___replies___href',
  AuthoredWordpressPostLinksVersionHistory = 'authored_wordpress__POST____links___version_history',
  AuthoredWordpressPostLinksVersionHistoryCount = 'authored_wordpress__POST____links___version_history___count',
  AuthoredWordpressPostLinksVersionHistoryHref = 'authored_wordpress__POST____links___version_history___href',
  AuthoredWordpressPostLinksPredecessorVersion = 'authored_wordpress__POST____links___predecessor_version',
  AuthoredWordpressPostLinksPredecessorVersionWordpressId = 'authored_wordpress__POST____links___predecessor_version___wordpress_id',
  AuthoredWordpressPostLinksPredecessorVersionHref = 'authored_wordpress__POST____links___predecessor_version___href',
  AuthoredWordpressPostLinksWpFeaturedmedia = 'authored_wordpress__POST____links___wp_featuredmedia',
  AuthoredWordpressPostLinksWpFeaturedmediaEmbeddable = 'authored_wordpress__POST____links___wp_featuredmedia___embeddable',
  AuthoredWordpressPostLinksWpFeaturedmediaHref = 'authored_wordpress__POST____links___wp_featuredmedia___href',
  AuthoredWordpressPostLinksWpAttachment = 'authored_wordpress__POST____links___wp_attachment',
  AuthoredWordpressPostLinksWpAttachmentHref = 'authored_wordpress__POST____links___wp_attachment___href',
  AuthoredWordpressPostLinksWpTerm = 'authored_wordpress__POST____links___wp_term',
  AuthoredWordpressPostLinksWpTermTaxonomy = 'authored_wordpress__POST____links___wp_term___taxonomy',
  AuthoredWordpressPostLinksWpTermEmbeddable = 'authored_wordpress__POST____links___wp_term___embeddable',
  AuthoredWordpressPostLinksWpTermHref = 'authored_wordpress__POST____links___wp_term___href',
  AuthoredWordpressPostLinksCuries = 'authored_wordpress__POST____links___curies',
  AuthoredWordpressPostLinksCuriesName = 'authored_wordpress__POST____links___curies___name',
  AuthoredWordpressPostLinksCuriesHref = 'authored_wordpress__POST____links___curies___href',
  AuthoredWordpressPostLinksCuriesTemplated = 'authored_wordpress__POST____links___curies___templated',
  AuthoredWordpressPostAuthorId = 'authored_wordpress__POST___author___id',
  AuthoredWordpressPostAuthorParentId = 'authored_wordpress__POST___author___parent___id',
  AuthoredWordpressPostAuthorParentChildren = 'authored_wordpress__POST___author___parent___children',
  AuthoredWordpressPostAuthorChildren = 'authored_wordpress__POST___author___children',
  AuthoredWordpressPostAuthorChildrenId = 'authored_wordpress__POST___author___children___id',
  AuthoredWordpressPostAuthorChildrenChildren = 'authored_wordpress__POST___author___children___children',
  AuthoredWordpressPostAuthorInternalContent = 'authored_wordpress__POST___author___internal___content',
  AuthoredWordpressPostAuthorInternalContentDigest = 'authored_wordpress__POST___author___internal___contentDigest',
  AuthoredWordpressPostAuthorInternalDescription = 'authored_wordpress__POST___author___internal___description',
  AuthoredWordpressPostAuthorInternalFieldOwners = 'authored_wordpress__POST___author___internal___fieldOwners',
  AuthoredWordpressPostAuthorInternalIgnoreType = 'authored_wordpress__POST___author___internal___ignoreType',
  AuthoredWordpressPostAuthorInternalMediaType = 'authored_wordpress__POST___author___internal___mediaType',
  AuthoredWordpressPostAuthorInternalOwner = 'authored_wordpress__POST___author___internal___owner',
  AuthoredWordpressPostAuthorInternalType = 'authored_wordpress__POST___author___internal___type',
  AuthoredWordpressPostAuthorWordpressId = 'authored_wordpress__POST___author___wordpress_id',
  AuthoredWordpressPostAuthorName = 'authored_wordpress__POST___author___name',
  AuthoredWordpressPostAuthorUrl = 'authored_wordpress__POST___author___url',
  AuthoredWordpressPostAuthorDescription = 'authored_wordpress__POST___author___description',
  AuthoredWordpressPostAuthorLink = 'authored_wordpress__POST___author___link',
  AuthoredWordpressPostAuthorSlug = 'authored_wordpress__POST___author___slug',
  AuthoredWordpressPostAuthorAvatarUrlsWordpress_24 = 'authored_wordpress__POST___author___avatar_urls___wordpress_24',
  AuthoredWordpressPostAuthorAvatarUrlsWordpress_48 = 'authored_wordpress__POST___author___avatar_urls___wordpress_48',
  AuthoredWordpressPostAuthorAvatarUrlsWordpress_96 = 'authored_wordpress__POST___author___avatar_urls___wordpress_96',
  AuthoredWordpressPostAuthorLinksSelf = 'authored_wordpress__POST___author____links___self',
  AuthoredWordpressPostAuthorLinksCollection = 'authored_wordpress__POST___author____links___collection',
  AuthoredWordpressPostAuthorAuthoredWordpressPage = 'authored_wordpress__POST___author___authored_wordpress__PAGE',
  AuthoredWordpressPostAuthorAuthoredWordpressPageId = 'authored_wordpress__POST___author___authored_wordpress__PAGE___id',
  AuthoredWordpressPostAuthorAuthoredWordpressPageChildren = 'authored_wordpress__POST___author___authored_wordpress__PAGE___children',
  AuthoredWordpressPostAuthorAuthoredWordpressPageWordpressId = 'authored_wordpress__POST___author___authored_wordpress__PAGE___wordpress_id',
  AuthoredWordpressPostAuthorAuthoredWordpressPageDate = 'authored_wordpress__POST___author___authored_wordpress__PAGE___date',
  AuthoredWordpressPostAuthorAuthoredWordpressPageGuid = 'authored_wordpress__POST___author___authored_wordpress__PAGE___guid',
  AuthoredWordpressPostAuthorAuthoredWordpressPageModified = 'authored_wordpress__POST___author___authored_wordpress__PAGE___modified',
  AuthoredWordpressPostAuthorAuthoredWordpressPageSlug = 'authored_wordpress__POST___author___authored_wordpress__PAGE___slug',
  AuthoredWordpressPostAuthorAuthoredWordpressPageStatus = 'authored_wordpress__POST___author___authored_wordpress__PAGE___status',
  AuthoredWordpressPostAuthorAuthoredWordpressPageType = 'authored_wordpress__POST___author___authored_wordpress__PAGE___type',
  AuthoredWordpressPostAuthorAuthoredWordpressPageLink = 'authored_wordpress__POST___author___authored_wordpress__PAGE___link',
  AuthoredWordpressPostAuthorAuthoredWordpressPageTitle = 'authored_wordpress__POST___author___authored_wordpress__PAGE___title',
  AuthoredWordpressPostAuthorAuthoredWordpressPageContent = 'authored_wordpress__POST___author___authored_wordpress__PAGE___content',
  AuthoredWordpressPostAuthorAuthoredWordpressPageExcerpt = 'authored_wordpress__POST___author___authored_wordpress__PAGE___excerpt',
  AuthoredWordpressPostAuthorAuthoredWordpressPageWordpressParent = 'authored_wordpress__POST___author___authored_wordpress__PAGE___wordpress_parent',
  AuthoredWordpressPostAuthorAuthoredWordpressPageMenuOrder = 'authored_wordpress__POST___author___authored_wordpress__PAGE___menu_order',
  AuthoredWordpressPostAuthorAuthoredWordpressPageCommentStatus = 'authored_wordpress__POST___author___authored_wordpress__PAGE___comment_status',
  AuthoredWordpressPostAuthorAuthoredWordpressPagePingStatus = 'authored_wordpress__POST___author___authored_wordpress__PAGE___ping_status',
  AuthoredWordpressPostAuthorAuthoredWordpressPageTemplate = 'authored_wordpress__POST___author___authored_wordpress__PAGE___template',
  AuthoredWordpressPostAuthorAuthoredWordpressPagePath = 'authored_wordpress__POST___author___authored_wordpress__PAGE___path',
  AuthoredWordpressPostAuthorAuthoredWordpressWpMedia = 'authored_wordpress__POST___author___authored_wordpress__wp_media',
  AuthoredWordpressPostAuthorAuthoredWordpressWpMediaId = 'authored_wordpress__POST___author___authored_wordpress__wp_media___id',
  AuthoredWordpressPostAuthorAuthoredWordpressWpMediaChildren = 'authored_wordpress__POST___author___authored_wordpress__wp_media___children',
  AuthoredWordpressPostAuthorAuthoredWordpressWpMediaWordpressId = 'authored_wordpress__POST___author___authored_wordpress__wp_media___wordpress_id',
  AuthoredWordpressPostAuthorAuthoredWordpressWpMediaDate = 'authored_wordpress__POST___author___authored_wordpress__wp_media___date',
  AuthoredWordpressPostAuthorAuthoredWordpressWpMediaModified = 'authored_wordpress__POST___author___authored_wordpress__wp_media___modified',
  AuthoredWordpressPostAuthorAuthoredWordpressWpMediaSlug = 'authored_wordpress__POST___author___authored_wordpress__wp_media___slug',
  AuthoredWordpressPostAuthorAuthoredWordpressWpMediaStatus = 'authored_wordpress__POST___author___authored_wordpress__wp_media___status',
  AuthoredWordpressPostAuthorAuthoredWordpressWpMediaType = 'authored_wordpress__POST___author___authored_wordpress__wp_media___type',
  AuthoredWordpressPostAuthorAuthoredWordpressWpMediaLink = 'authored_wordpress__POST___author___authored_wordpress__wp_media___link',
  AuthoredWordpressPostAuthorAuthoredWordpressWpMediaTitle = 'authored_wordpress__POST___author___authored_wordpress__wp_media___title',
  AuthoredWordpressPostAuthorAuthoredWordpressWpMediaCommentStatus = 'authored_wordpress__POST___author___authored_wordpress__wp_media___comment_status',
  AuthoredWordpressPostAuthorAuthoredWordpressWpMediaPingStatus = 'authored_wordpress__POST___author___authored_wordpress__wp_media___ping_status',
  AuthoredWordpressPostAuthorAuthoredWordpressWpMediaTemplate = 'authored_wordpress__POST___author___authored_wordpress__wp_media___template',
  AuthoredWordpressPostAuthorAuthoredWordpressWpMediaDescription = 'authored_wordpress__POST___author___authored_wordpress__wp_media___description',
  AuthoredWordpressPostAuthorAuthoredWordpressWpMediaCaption = 'authored_wordpress__POST___author___authored_wordpress__wp_media___caption',
  AuthoredWordpressPostAuthorAuthoredWordpressWpMediaAltText = 'authored_wordpress__POST___author___authored_wordpress__wp_media___alt_text',
  AuthoredWordpressPostAuthorAuthoredWordpressWpMediaMediaType = 'authored_wordpress__POST___author___authored_wordpress__wp_media___media_type',
  AuthoredWordpressPostAuthorAuthoredWordpressWpMediaMimeType = 'authored_wordpress__POST___author___authored_wordpress__wp_media___mime_type',
  AuthoredWordpressPostAuthorAuthoredWordpressWpMediaSourceUrl = 'authored_wordpress__POST___author___authored_wordpress__wp_media___source_url',
  AuthoredWordpressPostAuthorAuthoredWordpressWpMediaPath = 'authored_wordpress__POST___author___authored_wordpress__wp_media___path',
  AuthoredWordpressPostAuthorPath = 'authored_wordpress__POST___author___path',
  AuthoredWordpressPostAuthorAuthoredWordpressPost = 'authored_wordpress__POST___author___authored_wordpress__POST',
  AuthoredWordpressPostAuthorAuthoredWordpressPostId = 'authored_wordpress__POST___author___authored_wordpress__POST___id',
  AuthoredWordpressPostAuthorAuthoredWordpressPostChildren = 'authored_wordpress__POST___author___authored_wordpress__POST___children',
  AuthoredWordpressPostAuthorAuthoredWordpressPostWordpressId = 'authored_wordpress__POST___author___authored_wordpress__POST___wordpress_id',
  AuthoredWordpressPostAuthorAuthoredWordpressPostDate = 'authored_wordpress__POST___author___authored_wordpress__POST___date',
  AuthoredWordpressPostAuthorAuthoredWordpressPostGuid = 'authored_wordpress__POST___author___authored_wordpress__POST___guid',
  AuthoredWordpressPostAuthorAuthoredWordpressPostModified = 'authored_wordpress__POST___author___authored_wordpress__POST___modified',
  AuthoredWordpressPostAuthorAuthoredWordpressPostSlug = 'authored_wordpress__POST___author___authored_wordpress__POST___slug',
  AuthoredWordpressPostAuthorAuthoredWordpressPostStatus = 'authored_wordpress__POST___author___authored_wordpress__POST___status',
  AuthoredWordpressPostAuthorAuthoredWordpressPostType = 'authored_wordpress__POST___author___authored_wordpress__POST___type',
  AuthoredWordpressPostAuthorAuthoredWordpressPostLink = 'authored_wordpress__POST___author___authored_wordpress__POST___link',
  AuthoredWordpressPostAuthorAuthoredWordpressPostTitle = 'authored_wordpress__POST___author___authored_wordpress__POST___title',
  AuthoredWordpressPostAuthorAuthoredWordpressPostContent = 'authored_wordpress__POST___author___authored_wordpress__POST___content',
  AuthoredWordpressPostAuthorAuthoredWordpressPostExcerpt = 'authored_wordpress__POST___author___authored_wordpress__POST___excerpt',
  AuthoredWordpressPostAuthorAuthoredWordpressPostCommentStatus = 'authored_wordpress__POST___author___authored_wordpress__POST___comment_status',
  AuthoredWordpressPostAuthorAuthoredWordpressPostPingStatus = 'authored_wordpress__POST___author___authored_wordpress__POST___ping_status',
  AuthoredWordpressPostAuthorAuthoredWordpressPostSticky = 'authored_wordpress__POST___author___authored_wordpress__POST___sticky',
  AuthoredWordpressPostAuthorAuthoredWordpressPostTemplate = 'authored_wordpress__POST___author___authored_wordpress__POST___template',
  AuthoredWordpressPostAuthorAuthoredWordpressPostFormat = 'authored_wordpress__POST___author___authored_wordpress__POST___format',
  AuthoredWordpressPostAuthorAuthoredWordpressPostCategories = 'authored_wordpress__POST___author___authored_wordpress__POST___categories',
  AuthoredWordpressPostAuthorAuthoredWordpressPostPath = 'authored_wordpress__POST___author___authored_wordpress__POST___path',
  AuthoredWordpressPostAuthorAuthoredWordpressPostTags = 'authored_wordpress__POST___author___authored_wordpress__POST___tags',
  AuthoredWordpressPostCategories = 'authored_wordpress__POST___categories',
  AuthoredWordpressPostCategoriesId = 'authored_wordpress__POST___categories___id',
  AuthoredWordpressPostCategoriesParentId = 'authored_wordpress__POST___categories___parent___id',
  AuthoredWordpressPostCategoriesParentChildren = 'authored_wordpress__POST___categories___parent___children',
  AuthoredWordpressPostCategoriesChildren = 'authored_wordpress__POST___categories___children',
  AuthoredWordpressPostCategoriesChildrenId = 'authored_wordpress__POST___categories___children___id',
  AuthoredWordpressPostCategoriesChildrenChildren = 'authored_wordpress__POST___categories___children___children',
  AuthoredWordpressPostCategoriesInternalContent = 'authored_wordpress__POST___categories___internal___content',
  AuthoredWordpressPostCategoriesInternalContentDigest = 'authored_wordpress__POST___categories___internal___contentDigest',
  AuthoredWordpressPostCategoriesInternalDescription = 'authored_wordpress__POST___categories___internal___description',
  AuthoredWordpressPostCategoriesInternalFieldOwners = 'authored_wordpress__POST___categories___internal___fieldOwners',
  AuthoredWordpressPostCategoriesInternalIgnoreType = 'authored_wordpress__POST___categories___internal___ignoreType',
  AuthoredWordpressPostCategoriesInternalMediaType = 'authored_wordpress__POST___categories___internal___mediaType',
  AuthoredWordpressPostCategoriesInternalOwner = 'authored_wordpress__POST___categories___internal___owner',
  AuthoredWordpressPostCategoriesInternalType = 'authored_wordpress__POST___categories___internal___type',
  AuthoredWordpressPostCategoriesWordpressId = 'authored_wordpress__POST___categories___wordpress_id',
  AuthoredWordpressPostCategoriesCount = 'authored_wordpress__POST___categories___count',
  AuthoredWordpressPostCategoriesDescription = 'authored_wordpress__POST___categories___description',
  AuthoredWordpressPostCategoriesLink = 'authored_wordpress__POST___categories___link',
  AuthoredWordpressPostCategoriesName = 'authored_wordpress__POST___categories___name',
  AuthoredWordpressPostCategoriesSlug = 'authored_wordpress__POST___categories___slug',
  AuthoredWordpressPostCategoriesWordpressParent = 'authored_wordpress__POST___categories___wordpress_parent',
  AuthoredWordpressPostCategoriesLinksSelf = 'authored_wordpress__POST___categories____links___self',
  AuthoredWordpressPostCategoriesLinksCollection = 'authored_wordpress__POST___categories____links___collection',
  AuthoredWordpressPostCategoriesLinksAbout = 'authored_wordpress__POST___categories____links___about',
  AuthoredWordpressPostCategoriesLinksWpPostType = 'authored_wordpress__POST___categories____links___wp_post_type',
  AuthoredWordpressPostCategoriesLinksCuries = 'authored_wordpress__POST___categories____links___curies',
  AuthoredWordpressPostCategoriesTaxonomyId = 'authored_wordpress__POST___categories___taxonomy___id',
  AuthoredWordpressPostCategoriesTaxonomyChildren = 'authored_wordpress__POST___categories___taxonomy___children',
  AuthoredWordpressPostCategoriesTaxonomyWordpressId = 'authored_wordpress__POST___categories___taxonomy___wordpress_id',
  AuthoredWordpressPostCategoriesTaxonomyName = 'authored_wordpress__POST___categories___taxonomy___name',
  AuthoredWordpressPostCategoriesTaxonomySlug = 'authored_wordpress__POST___categories___taxonomy___slug',
  AuthoredWordpressPostCategoriesTaxonomyDescription = 'authored_wordpress__POST___categories___taxonomy___description',
  AuthoredWordpressPostCategoriesTaxonomyTypes = 'authored_wordpress__POST___categories___taxonomy___types',
  AuthoredWordpressPostCategoriesTaxonomyHierarchical = 'authored_wordpress__POST___categories___taxonomy___hierarchical',
  AuthoredWordpressPostCategoriesTaxonomyRestBase = 'authored_wordpress__POST___categories___taxonomy___rest_base',
  AuthoredWordpressPostCategoriesPath = 'authored_wordpress__POST___categories___path',
  AuthoredWordpressPostFeaturedMediaId = 'authored_wordpress__POST___featured_media___id',
  AuthoredWordpressPostFeaturedMediaParentId = 'authored_wordpress__POST___featured_media___parent___id',
  AuthoredWordpressPostFeaturedMediaParentChildren = 'authored_wordpress__POST___featured_media___parent___children',
  AuthoredWordpressPostFeaturedMediaChildren = 'authored_wordpress__POST___featured_media___children',
  AuthoredWordpressPostFeaturedMediaChildrenId = 'authored_wordpress__POST___featured_media___children___id',
  AuthoredWordpressPostFeaturedMediaChildrenChildren = 'authored_wordpress__POST___featured_media___children___children',
  AuthoredWordpressPostFeaturedMediaInternalContent = 'authored_wordpress__POST___featured_media___internal___content',
  AuthoredWordpressPostFeaturedMediaInternalContentDigest = 'authored_wordpress__POST___featured_media___internal___contentDigest',
  AuthoredWordpressPostFeaturedMediaInternalDescription = 'authored_wordpress__POST___featured_media___internal___description',
  AuthoredWordpressPostFeaturedMediaInternalFieldOwners = 'authored_wordpress__POST___featured_media___internal___fieldOwners',
  AuthoredWordpressPostFeaturedMediaInternalIgnoreType = 'authored_wordpress__POST___featured_media___internal___ignoreType',
  AuthoredWordpressPostFeaturedMediaInternalMediaType = 'authored_wordpress__POST___featured_media___internal___mediaType',
  AuthoredWordpressPostFeaturedMediaInternalOwner = 'authored_wordpress__POST___featured_media___internal___owner',
  AuthoredWordpressPostFeaturedMediaInternalType = 'authored_wordpress__POST___featured_media___internal___type',
  AuthoredWordpressPostFeaturedMediaWordpressId = 'authored_wordpress__POST___featured_media___wordpress_id',
  AuthoredWordpressPostFeaturedMediaDate = 'authored_wordpress__POST___featured_media___date',
  AuthoredWordpressPostFeaturedMediaModified = 'authored_wordpress__POST___featured_media___modified',
  AuthoredWordpressPostFeaturedMediaSlug = 'authored_wordpress__POST___featured_media___slug',
  AuthoredWordpressPostFeaturedMediaStatus = 'authored_wordpress__POST___featured_media___status',
  AuthoredWordpressPostFeaturedMediaType = 'authored_wordpress__POST___featured_media___type',
  AuthoredWordpressPostFeaturedMediaLink = 'authored_wordpress__POST___featured_media___link',
  AuthoredWordpressPostFeaturedMediaTitle = 'authored_wordpress__POST___featured_media___title',
  AuthoredWordpressPostFeaturedMediaCommentStatus = 'authored_wordpress__POST___featured_media___comment_status',
  AuthoredWordpressPostFeaturedMediaPingStatus = 'authored_wordpress__POST___featured_media___ping_status',
  AuthoredWordpressPostFeaturedMediaTemplate = 'authored_wordpress__POST___featured_media___template',
  AuthoredWordpressPostFeaturedMediaDescription = 'authored_wordpress__POST___featured_media___description',
  AuthoredWordpressPostFeaturedMediaCaption = 'authored_wordpress__POST___featured_media___caption',
  AuthoredWordpressPostFeaturedMediaAltText = 'authored_wordpress__POST___featured_media___alt_text',
  AuthoredWordpressPostFeaturedMediaMediaType = 'authored_wordpress__POST___featured_media___media_type',
  AuthoredWordpressPostFeaturedMediaMimeType = 'authored_wordpress__POST___featured_media___mime_type',
  AuthoredWordpressPostFeaturedMediaMediaDetailsWidth = 'authored_wordpress__POST___featured_media___media_details___width',
  AuthoredWordpressPostFeaturedMediaMediaDetailsHeight = 'authored_wordpress__POST___featured_media___media_details___height',
  AuthoredWordpressPostFeaturedMediaMediaDetailsFile = 'authored_wordpress__POST___featured_media___media_details___file',
  AuthoredWordpressPostFeaturedMediaMediaDetailsOriginalImage = 'authored_wordpress__POST___featured_media___media_details___original_image',
  AuthoredWordpressPostFeaturedMediaSourceUrl = 'authored_wordpress__POST___featured_media___source_url',
  AuthoredWordpressPostFeaturedMediaLinksSelf = 'authored_wordpress__POST___featured_media____links___self',
  AuthoredWordpressPostFeaturedMediaLinksCollection = 'authored_wordpress__POST___featured_media____links___collection',
  AuthoredWordpressPostFeaturedMediaLinksAbout = 'authored_wordpress__POST___featured_media____links___about',
  AuthoredWordpressPostFeaturedMediaLinksAuthor = 'authored_wordpress__POST___featured_media____links___author',
  AuthoredWordpressPostFeaturedMediaLinksReplies = 'authored_wordpress__POST___featured_media____links___replies',
  AuthoredWordpressPostFeaturedMediaAuthorId = 'authored_wordpress__POST___featured_media___author___id',
  AuthoredWordpressPostFeaturedMediaAuthorChildren = 'authored_wordpress__POST___featured_media___author___children',
  AuthoredWordpressPostFeaturedMediaAuthorWordpressId = 'authored_wordpress__POST___featured_media___author___wordpress_id',
  AuthoredWordpressPostFeaturedMediaAuthorName = 'authored_wordpress__POST___featured_media___author___name',
  AuthoredWordpressPostFeaturedMediaAuthorUrl = 'authored_wordpress__POST___featured_media___author___url',
  AuthoredWordpressPostFeaturedMediaAuthorDescription = 'authored_wordpress__POST___featured_media___author___description',
  AuthoredWordpressPostFeaturedMediaAuthorLink = 'authored_wordpress__POST___featured_media___author___link',
  AuthoredWordpressPostFeaturedMediaAuthorSlug = 'authored_wordpress__POST___featured_media___author___slug',
  AuthoredWordpressPostFeaturedMediaAuthorAuthoredWordpressPage = 'authored_wordpress__POST___featured_media___author___authored_wordpress__PAGE',
  AuthoredWordpressPostFeaturedMediaAuthorAuthoredWordpressWpMedia = 'authored_wordpress__POST___featured_media___author___authored_wordpress__wp_media',
  AuthoredWordpressPostFeaturedMediaAuthorPath = 'authored_wordpress__POST___featured_media___author___path',
  AuthoredWordpressPostFeaturedMediaAuthorAuthoredWordpressPost = 'authored_wordpress__POST___featured_media___author___authored_wordpress__POST',
  AuthoredWordpressPostFeaturedMediaGuidId = 'authored_wordpress__POST___featured_media___guid___id',
  AuthoredWordpressPostFeaturedMediaGuidChildren = 'authored_wordpress__POST___featured_media___guid___children',
  AuthoredWordpressPostFeaturedMediaGuidWordpressId = 'authored_wordpress__POST___featured_media___guid___wordpress_id',
  AuthoredWordpressPostFeaturedMediaGuidDate = 'authored_wordpress__POST___featured_media___guid___date',
  AuthoredWordpressPostFeaturedMediaGuidModified = 'authored_wordpress__POST___featured_media___guid___modified',
  AuthoredWordpressPostFeaturedMediaGuidSlug = 'authored_wordpress__POST___featured_media___guid___slug',
  AuthoredWordpressPostFeaturedMediaGuidStatus = 'authored_wordpress__POST___featured_media___guid___status',
  AuthoredWordpressPostFeaturedMediaGuidType = 'authored_wordpress__POST___featured_media___guid___type',
  AuthoredWordpressPostFeaturedMediaGuidLink = 'authored_wordpress__POST___featured_media___guid___link',
  AuthoredWordpressPostFeaturedMediaGuidTitle = 'authored_wordpress__POST___featured_media___guid___title',
  AuthoredWordpressPostFeaturedMediaGuidCommentStatus = 'authored_wordpress__POST___featured_media___guid___comment_status',
  AuthoredWordpressPostFeaturedMediaGuidPingStatus = 'authored_wordpress__POST___featured_media___guid___ping_status',
  AuthoredWordpressPostFeaturedMediaGuidTemplate = 'authored_wordpress__POST___featured_media___guid___template',
  AuthoredWordpressPostFeaturedMediaGuidDescription = 'authored_wordpress__POST___featured_media___guid___description',
  AuthoredWordpressPostFeaturedMediaGuidCaption = 'authored_wordpress__POST___featured_media___guid___caption',
  AuthoredWordpressPostFeaturedMediaGuidAltText = 'authored_wordpress__POST___featured_media___guid___alt_text',
  AuthoredWordpressPostFeaturedMediaGuidMediaType = 'authored_wordpress__POST___featured_media___guid___media_type',
  AuthoredWordpressPostFeaturedMediaGuidMimeType = 'authored_wordpress__POST___featured_media___guid___mime_type',
  AuthoredWordpressPostFeaturedMediaGuidSourceUrl = 'authored_wordpress__POST___featured_media___guid___source_url',
  AuthoredWordpressPostFeaturedMediaGuidPath = 'authored_wordpress__POST___featured_media___guid___path',
  AuthoredWordpressPostFeaturedMediaLocalFileSourceInstanceName = 'authored_wordpress__POST___featured_media___localFile___sourceInstanceName',
  AuthoredWordpressPostFeaturedMediaLocalFileAbsolutePath = 'authored_wordpress__POST___featured_media___localFile___absolutePath',
  AuthoredWordpressPostFeaturedMediaLocalFileRelativePath = 'authored_wordpress__POST___featured_media___localFile___relativePath',
  AuthoredWordpressPostFeaturedMediaLocalFileExtension = 'authored_wordpress__POST___featured_media___localFile___extension',
  AuthoredWordpressPostFeaturedMediaLocalFileSize = 'authored_wordpress__POST___featured_media___localFile___size',
  AuthoredWordpressPostFeaturedMediaLocalFilePrettySize = 'authored_wordpress__POST___featured_media___localFile___prettySize',
  AuthoredWordpressPostFeaturedMediaLocalFileModifiedTime = 'authored_wordpress__POST___featured_media___localFile___modifiedTime',
  AuthoredWordpressPostFeaturedMediaLocalFileAccessTime = 'authored_wordpress__POST___featured_media___localFile___accessTime',
  AuthoredWordpressPostFeaturedMediaLocalFileChangeTime = 'authored_wordpress__POST___featured_media___localFile___changeTime',
  AuthoredWordpressPostFeaturedMediaLocalFileBirthTime = 'authored_wordpress__POST___featured_media___localFile___birthTime',
  AuthoredWordpressPostFeaturedMediaLocalFileRoot = 'authored_wordpress__POST___featured_media___localFile___root',
  AuthoredWordpressPostFeaturedMediaLocalFileDir = 'authored_wordpress__POST___featured_media___localFile___dir',
  AuthoredWordpressPostFeaturedMediaLocalFileBase = 'authored_wordpress__POST___featured_media___localFile___base',
  AuthoredWordpressPostFeaturedMediaLocalFileExt = 'authored_wordpress__POST___featured_media___localFile___ext',
  AuthoredWordpressPostFeaturedMediaLocalFileName = 'authored_wordpress__POST___featured_media___localFile___name',
  AuthoredWordpressPostFeaturedMediaLocalFileRelativeDirectory = 'authored_wordpress__POST___featured_media___localFile___relativeDirectory',
  AuthoredWordpressPostFeaturedMediaLocalFileDev = 'authored_wordpress__POST___featured_media___localFile___dev',
  AuthoredWordpressPostFeaturedMediaLocalFileMode = 'authored_wordpress__POST___featured_media___localFile___mode',
  AuthoredWordpressPostFeaturedMediaLocalFileNlink = 'authored_wordpress__POST___featured_media___localFile___nlink',
  AuthoredWordpressPostFeaturedMediaLocalFileUid = 'authored_wordpress__POST___featured_media___localFile___uid',
  AuthoredWordpressPostFeaturedMediaLocalFileGid = 'authored_wordpress__POST___featured_media___localFile___gid',
  AuthoredWordpressPostFeaturedMediaLocalFileRdev = 'authored_wordpress__POST___featured_media___localFile___rdev',
  AuthoredWordpressPostFeaturedMediaLocalFileIno = 'authored_wordpress__POST___featured_media___localFile___ino',
  AuthoredWordpressPostFeaturedMediaLocalFileAtimeMs = 'authored_wordpress__POST___featured_media___localFile___atimeMs',
  AuthoredWordpressPostFeaturedMediaLocalFileMtimeMs = 'authored_wordpress__POST___featured_media___localFile___mtimeMs',
  AuthoredWordpressPostFeaturedMediaLocalFileCtimeMs = 'authored_wordpress__POST___featured_media___localFile___ctimeMs',
  AuthoredWordpressPostFeaturedMediaLocalFileAtime = 'authored_wordpress__POST___featured_media___localFile___atime',
  AuthoredWordpressPostFeaturedMediaLocalFileMtime = 'authored_wordpress__POST___featured_media___localFile___mtime',
  AuthoredWordpressPostFeaturedMediaLocalFileCtime = 'authored_wordpress__POST___featured_media___localFile___ctime',
  AuthoredWordpressPostFeaturedMediaLocalFileBirthtime = 'authored_wordpress__POST___featured_media___localFile___birthtime',
  AuthoredWordpressPostFeaturedMediaLocalFileBirthtimeMs = 'authored_wordpress__POST___featured_media___localFile___birthtimeMs',
  AuthoredWordpressPostFeaturedMediaLocalFileBlksize = 'authored_wordpress__POST___featured_media___localFile___blksize',
  AuthoredWordpressPostFeaturedMediaLocalFileBlocks = 'authored_wordpress__POST___featured_media___localFile___blocks',
  AuthoredWordpressPostFeaturedMediaLocalFileUrl = 'authored_wordpress__POST___featured_media___localFile___url',
  AuthoredWordpressPostFeaturedMediaLocalFileId = 'authored_wordpress__POST___featured_media___localFile___id',
  AuthoredWordpressPostFeaturedMediaLocalFileChildren = 'authored_wordpress__POST___featured_media___localFile___children',
  AuthoredWordpressPostFeaturedMediaPath = 'authored_wordpress__POST___featured_media___path',
  AuthoredWordpressPostJetpackFeaturedMediaUrlId = 'authored_wordpress__POST___jetpack_featured_media_url___id',
  AuthoredWordpressPostJetpackFeaturedMediaUrlParentId = 'authored_wordpress__POST___jetpack_featured_media_url___parent___id',
  AuthoredWordpressPostJetpackFeaturedMediaUrlParentChildren = 'authored_wordpress__POST___jetpack_featured_media_url___parent___children',
  AuthoredWordpressPostJetpackFeaturedMediaUrlChildren = 'authored_wordpress__POST___jetpack_featured_media_url___children',
  AuthoredWordpressPostJetpackFeaturedMediaUrlChildrenId = 'authored_wordpress__POST___jetpack_featured_media_url___children___id',
  AuthoredWordpressPostJetpackFeaturedMediaUrlChildrenChildren = 'authored_wordpress__POST___jetpack_featured_media_url___children___children',
  AuthoredWordpressPostJetpackFeaturedMediaUrlInternalContent = 'authored_wordpress__POST___jetpack_featured_media_url___internal___content',
  AuthoredWordpressPostJetpackFeaturedMediaUrlInternalContentDigest = 'authored_wordpress__POST___jetpack_featured_media_url___internal___contentDigest',
  AuthoredWordpressPostJetpackFeaturedMediaUrlInternalDescription = 'authored_wordpress__POST___jetpack_featured_media_url___internal___description',
  AuthoredWordpressPostJetpackFeaturedMediaUrlInternalFieldOwners = 'authored_wordpress__POST___jetpack_featured_media_url___internal___fieldOwners',
  AuthoredWordpressPostJetpackFeaturedMediaUrlInternalIgnoreType = 'authored_wordpress__POST___jetpack_featured_media_url___internal___ignoreType',
  AuthoredWordpressPostJetpackFeaturedMediaUrlInternalMediaType = 'authored_wordpress__POST___jetpack_featured_media_url___internal___mediaType',
  AuthoredWordpressPostJetpackFeaturedMediaUrlInternalOwner = 'authored_wordpress__POST___jetpack_featured_media_url___internal___owner',
  AuthoredWordpressPostJetpackFeaturedMediaUrlInternalType = 'authored_wordpress__POST___jetpack_featured_media_url___internal___type',
  AuthoredWordpressPostJetpackFeaturedMediaUrlWordpressId = 'authored_wordpress__POST___jetpack_featured_media_url___wordpress_id',
  AuthoredWordpressPostJetpackFeaturedMediaUrlDate = 'authored_wordpress__POST___jetpack_featured_media_url___date',
  AuthoredWordpressPostJetpackFeaturedMediaUrlModified = 'authored_wordpress__POST___jetpack_featured_media_url___modified',
  AuthoredWordpressPostJetpackFeaturedMediaUrlSlug = 'authored_wordpress__POST___jetpack_featured_media_url___slug',
  AuthoredWordpressPostJetpackFeaturedMediaUrlStatus = 'authored_wordpress__POST___jetpack_featured_media_url___status',
  AuthoredWordpressPostJetpackFeaturedMediaUrlType = 'authored_wordpress__POST___jetpack_featured_media_url___type',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLink = 'authored_wordpress__POST___jetpack_featured_media_url___link',
  AuthoredWordpressPostJetpackFeaturedMediaUrlTitle = 'authored_wordpress__POST___jetpack_featured_media_url___title',
  AuthoredWordpressPostJetpackFeaturedMediaUrlCommentStatus = 'authored_wordpress__POST___jetpack_featured_media_url___comment_status',
  AuthoredWordpressPostJetpackFeaturedMediaUrlPingStatus = 'authored_wordpress__POST___jetpack_featured_media_url___ping_status',
  AuthoredWordpressPostJetpackFeaturedMediaUrlTemplate = 'authored_wordpress__POST___jetpack_featured_media_url___template',
  AuthoredWordpressPostJetpackFeaturedMediaUrlDescription = 'authored_wordpress__POST___jetpack_featured_media_url___description',
  AuthoredWordpressPostJetpackFeaturedMediaUrlCaption = 'authored_wordpress__POST___jetpack_featured_media_url___caption',
  AuthoredWordpressPostJetpackFeaturedMediaUrlAltText = 'authored_wordpress__POST___jetpack_featured_media_url___alt_text',
  AuthoredWordpressPostJetpackFeaturedMediaUrlMediaType = 'authored_wordpress__POST___jetpack_featured_media_url___media_type',
  AuthoredWordpressPostJetpackFeaturedMediaUrlMimeType = 'authored_wordpress__POST___jetpack_featured_media_url___mime_type',
  AuthoredWordpressPostJetpackFeaturedMediaUrlMediaDetailsWidth = 'authored_wordpress__POST___jetpack_featured_media_url___media_details___width',
  AuthoredWordpressPostJetpackFeaturedMediaUrlMediaDetailsHeight = 'authored_wordpress__POST___jetpack_featured_media_url___media_details___height',
  AuthoredWordpressPostJetpackFeaturedMediaUrlMediaDetailsFile = 'authored_wordpress__POST___jetpack_featured_media_url___media_details___file',
  AuthoredWordpressPostJetpackFeaturedMediaUrlMediaDetailsOriginalImage = 'authored_wordpress__POST___jetpack_featured_media_url___media_details___original_image',
  AuthoredWordpressPostJetpackFeaturedMediaUrlSourceUrl = 'authored_wordpress__POST___jetpack_featured_media_url___source_url',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLinksSelf = 'authored_wordpress__POST___jetpack_featured_media_url____links___self',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLinksCollection = 'authored_wordpress__POST___jetpack_featured_media_url____links___collection',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLinksAbout = 'authored_wordpress__POST___jetpack_featured_media_url____links___about',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLinksAuthor = 'authored_wordpress__POST___jetpack_featured_media_url____links___author',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLinksReplies = 'authored_wordpress__POST___jetpack_featured_media_url____links___replies',
  AuthoredWordpressPostJetpackFeaturedMediaUrlAuthorId = 'authored_wordpress__POST___jetpack_featured_media_url___author___id',
  AuthoredWordpressPostJetpackFeaturedMediaUrlAuthorChildren = 'authored_wordpress__POST___jetpack_featured_media_url___author___children',
  AuthoredWordpressPostJetpackFeaturedMediaUrlAuthorWordpressId = 'authored_wordpress__POST___jetpack_featured_media_url___author___wordpress_id',
  AuthoredWordpressPostJetpackFeaturedMediaUrlAuthorName = 'authored_wordpress__POST___jetpack_featured_media_url___author___name',
  AuthoredWordpressPostJetpackFeaturedMediaUrlAuthorUrl = 'authored_wordpress__POST___jetpack_featured_media_url___author___url',
  AuthoredWordpressPostJetpackFeaturedMediaUrlAuthorDescription = 'authored_wordpress__POST___jetpack_featured_media_url___author___description',
  AuthoredWordpressPostJetpackFeaturedMediaUrlAuthorLink = 'authored_wordpress__POST___jetpack_featured_media_url___author___link',
  AuthoredWordpressPostJetpackFeaturedMediaUrlAuthorSlug = 'authored_wordpress__POST___jetpack_featured_media_url___author___slug',
  AuthoredWordpressPostJetpackFeaturedMediaUrlAuthorAuthoredWordpressPage = 'authored_wordpress__POST___jetpack_featured_media_url___author___authored_wordpress__PAGE',
  AuthoredWordpressPostJetpackFeaturedMediaUrlAuthorAuthoredWordpressWpMedia = 'authored_wordpress__POST___jetpack_featured_media_url___author___authored_wordpress__wp_media',
  AuthoredWordpressPostJetpackFeaturedMediaUrlAuthorPath = 'authored_wordpress__POST___jetpack_featured_media_url___author___path',
  AuthoredWordpressPostJetpackFeaturedMediaUrlAuthorAuthoredWordpressPost = 'authored_wordpress__POST___jetpack_featured_media_url___author___authored_wordpress__POST',
  AuthoredWordpressPostJetpackFeaturedMediaUrlGuidId = 'authored_wordpress__POST___jetpack_featured_media_url___guid___id',
  AuthoredWordpressPostJetpackFeaturedMediaUrlGuidChildren = 'authored_wordpress__POST___jetpack_featured_media_url___guid___children',
  AuthoredWordpressPostJetpackFeaturedMediaUrlGuidWordpressId = 'authored_wordpress__POST___jetpack_featured_media_url___guid___wordpress_id',
  AuthoredWordpressPostJetpackFeaturedMediaUrlGuidDate = 'authored_wordpress__POST___jetpack_featured_media_url___guid___date',
  AuthoredWordpressPostJetpackFeaturedMediaUrlGuidModified = 'authored_wordpress__POST___jetpack_featured_media_url___guid___modified',
  AuthoredWordpressPostJetpackFeaturedMediaUrlGuidSlug = 'authored_wordpress__POST___jetpack_featured_media_url___guid___slug',
  AuthoredWordpressPostJetpackFeaturedMediaUrlGuidStatus = 'authored_wordpress__POST___jetpack_featured_media_url___guid___status',
  AuthoredWordpressPostJetpackFeaturedMediaUrlGuidType = 'authored_wordpress__POST___jetpack_featured_media_url___guid___type',
  AuthoredWordpressPostJetpackFeaturedMediaUrlGuidLink = 'authored_wordpress__POST___jetpack_featured_media_url___guid___link',
  AuthoredWordpressPostJetpackFeaturedMediaUrlGuidTitle = 'authored_wordpress__POST___jetpack_featured_media_url___guid___title',
  AuthoredWordpressPostJetpackFeaturedMediaUrlGuidCommentStatus = 'authored_wordpress__POST___jetpack_featured_media_url___guid___comment_status',
  AuthoredWordpressPostJetpackFeaturedMediaUrlGuidPingStatus = 'authored_wordpress__POST___jetpack_featured_media_url___guid___ping_status',
  AuthoredWordpressPostJetpackFeaturedMediaUrlGuidTemplate = 'authored_wordpress__POST___jetpack_featured_media_url___guid___template',
  AuthoredWordpressPostJetpackFeaturedMediaUrlGuidDescription = 'authored_wordpress__POST___jetpack_featured_media_url___guid___description',
  AuthoredWordpressPostJetpackFeaturedMediaUrlGuidCaption = 'authored_wordpress__POST___jetpack_featured_media_url___guid___caption',
  AuthoredWordpressPostJetpackFeaturedMediaUrlGuidAltText = 'authored_wordpress__POST___jetpack_featured_media_url___guid___alt_text',
  AuthoredWordpressPostJetpackFeaturedMediaUrlGuidMediaType = 'authored_wordpress__POST___jetpack_featured_media_url___guid___media_type',
  AuthoredWordpressPostJetpackFeaturedMediaUrlGuidMimeType = 'authored_wordpress__POST___jetpack_featured_media_url___guid___mime_type',
  AuthoredWordpressPostJetpackFeaturedMediaUrlGuidSourceUrl = 'authored_wordpress__POST___jetpack_featured_media_url___guid___source_url',
  AuthoredWordpressPostJetpackFeaturedMediaUrlGuidPath = 'authored_wordpress__POST___jetpack_featured_media_url___guid___path',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileSourceInstanceName = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___sourceInstanceName',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileAbsolutePath = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___absolutePath',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileRelativePath = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___relativePath',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileExtension = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___extension',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileSize = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___size',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFilePrettySize = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___prettySize',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileModifiedTime = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___modifiedTime',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileAccessTime = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___accessTime',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileChangeTime = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___changeTime',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileBirthTime = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___birthTime',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileRoot = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___root',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileDir = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___dir',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileBase = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___base',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileExt = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___ext',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileName = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___name',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileRelativeDirectory = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___relativeDirectory',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileDev = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___dev',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileMode = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___mode',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileNlink = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___nlink',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileUid = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___uid',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileGid = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___gid',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileRdev = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___rdev',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileIno = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___ino',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileAtimeMs = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___atimeMs',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileMtimeMs = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___mtimeMs',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileCtimeMs = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___ctimeMs',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileAtime = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___atime',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileMtime = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___mtime',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileCtime = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___ctime',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileBirthtime = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___birthtime',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileBirthtimeMs = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___birthtimeMs',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileBlksize = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___blksize',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileBlocks = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___blocks',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileUrl = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___url',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileId = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___id',
  AuthoredWordpressPostJetpackFeaturedMediaUrlLocalFileChildren = 'authored_wordpress__POST___jetpack_featured_media_url___localFile___children',
  AuthoredWordpressPostJetpackFeaturedMediaUrlPath = 'authored_wordpress__POST___jetpack_featured_media_url___path',
  AuthoredWordpressPostPath = 'authored_wordpress__POST___path',
  AuthoredWordpressPostTags = 'authored_wordpress__POST___tags',
  AuthoredWordpressPostTagsId = 'authored_wordpress__POST___tags___id',
  AuthoredWordpressPostTagsParentId = 'authored_wordpress__POST___tags___parent___id',
  AuthoredWordpressPostTagsParentChildren = 'authored_wordpress__POST___tags___parent___children',
  AuthoredWordpressPostTagsChildren = 'authored_wordpress__POST___tags___children',
  AuthoredWordpressPostTagsChildrenId = 'authored_wordpress__POST___tags___children___id',
  AuthoredWordpressPostTagsChildrenChildren = 'authored_wordpress__POST___tags___children___children',
  AuthoredWordpressPostTagsInternalContent = 'authored_wordpress__POST___tags___internal___content',
  AuthoredWordpressPostTagsInternalContentDigest = 'authored_wordpress__POST___tags___internal___contentDigest',
  AuthoredWordpressPostTagsInternalDescription = 'authored_wordpress__POST___tags___internal___description',
  AuthoredWordpressPostTagsInternalFieldOwners = 'authored_wordpress__POST___tags___internal___fieldOwners',
  AuthoredWordpressPostTagsInternalIgnoreType = 'authored_wordpress__POST___tags___internal___ignoreType',
  AuthoredWordpressPostTagsInternalMediaType = 'authored_wordpress__POST___tags___internal___mediaType',
  AuthoredWordpressPostTagsInternalOwner = 'authored_wordpress__POST___tags___internal___owner',
  AuthoredWordpressPostTagsInternalType = 'authored_wordpress__POST___tags___internal___type',
  AuthoredWordpressPostTagsWordpressId = 'authored_wordpress__POST___tags___wordpress_id',
  AuthoredWordpressPostTagsCount = 'authored_wordpress__POST___tags___count',
  AuthoredWordpressPostTagsDescription = 'authored_wordpress__POST___tags___description',
  AuthoredWordpressPostTagsLink = 'authored_wordpress__POST___tags___link',
  AuthoredWordpressPostTagsName = 'authored_wordpress__POST___tags___name',
  AuthoredWordpressPostTagsSlug = 'authored_wordpress__POST___tags___slug',
  AuthoredWordpressPostTagsLinksSelf = 'authored_wordpress__POST___tags____links___self',
  AuthoredWordpressPostTagsLinksCollection = 'authored_wordpress__POST___tags____links___collection',
  AuthoredWordpressPostTagsLinksAbout = 'authored_wordpress__POST___tags____links___about',
  AuthoredWordpressPostTagsLinksWpPostType = 'authored_wordpress__POST___tags____links___wp_post_type',
  AuthoredWordpressPostTagsLinksCuries = 'authored_wordpress__POST___tags____links___curies',
  AuthoredWordpressPostTagsTaxonomyId = 'authored_wordpress__POST___tags___taxonomy___id',
  AuthoredWordpressPostTagsTaxonomyChildren = 'authored_wordpress__POST___tags___taxonomy___children',
  AuthoredWordpressPostTagsTaxonomyWordpressId = 'authored_wordpress__POST___tags___taxonomy___wordpress_id',
  AuthoredWordpressPostTagsTaxonomyName = 'authored_wordpress__POST___tags___taxonomy___name',
  AuthoredWordpressPostTagsTaxonomySlug = 'authored_wordpress__POST___tags___taxonomy___slug',
  AuthoredWordpressPostTagsTaxonomyDescription = 'authored_wordpress__POST___tags___taxonomy___description',
  AuthoredWordpressPostTagsTaxonomyTypes = 'authored_wordpress__POST___tags___taxonomy___types',
  AuthoredWordpressPostTagsTaxonomyHierarchical = 'authored_wordpress__POST___tags___taxonomy___hierarchical',
  AuthoredWordpressPostTagsTaxonomyRestBase = 'authored_wordpress__POST___tags___taxonomy___rest_base',
  AuthoredWordpressPostTagsPath = 'authored_wordpress__POST___tags___path'
}

export type Wordpress__Wp_UsersFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  wordpress_id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  avatar_urls?: Maybe<Wordpress__Wp_UsersAvatar_UrlsFilterInput>;
  _links?: Maybe<Wordpress__Wp_Users_LinksFilterInput>;
  authored_wordpress__PAGE?: Maybe<Wordpress__PageFilterListInput>;
  authored_wordpress__wp_media?: Maybe<Wordpress__Wp_MediaFilterListInput>;
  path?: Maybe<StringQueryOperatorInput>;
  authored_wordpress__POST?: Maybe<Wordpress__PostFilterListInput>;
};

export type Wordpress__Wp_UsersGroupConnection = {
  __typename?: 'wordpress__wp_usersGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<Wordpress__Wp_UsersEdge>;
  nodes: Array<Wordpress__Wp_Users>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type Wordpress__Wp_UsersSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Wp_UsersFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

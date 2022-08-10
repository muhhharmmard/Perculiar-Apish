export type DEPARTMENT ={
  name:string,
  owner:OWNER,
  tags: TAGS,
  Products: PRODUCTS| null
}
export type TAG ={
  name:string,
  department: DEPARTMENT,
  owner: OWNER 
}
export type TAGS = TAG[]
export type PRODUCTS = PRODUCTS[]
export type DEPARTMENTS= DEPARTMENT []
export type OWNER = object
export type PRODUCT ={
  name:string,
  department: DEPARTMENT,
  tags: TAGS,
  price:number,
  owner: OWNER 
}  




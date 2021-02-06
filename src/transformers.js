export const slugify = post =>  {
  return post.replace('.md','').replace(/\s+|_/g,'-')
}

export const slugToFile = slug => {
  return `${slug.replace(/\s+|-/g,'_')}.md`
}

export default { 
  slugify, 
  slugToFile,
}
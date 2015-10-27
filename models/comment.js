const promise = (id) => {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve({id:id, text: 'Very nice example!'})
    }, 3000)
  })
}

export class Comment {
  constructor(){}
  static async get(id){
    const comment = await promise(id);
    return comment;
  }
}

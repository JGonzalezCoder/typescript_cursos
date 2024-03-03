const imprimirDatos = (data: {
  username: string,
  email: string
}) : void =>{
  console.log(`${data.username} y ${data.email}`);
}

imprimirDatos({
  username : 'freddier',
  email : 'freddy@gmail.com'
})

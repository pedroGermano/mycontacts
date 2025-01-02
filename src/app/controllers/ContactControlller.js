class ContactController {
  index(request, response){
    response.send('Send from Contact Controller')
  }
  show(){

  }
  store(){

  }

  delete(){

  }
}

module.exports = new ContactController()

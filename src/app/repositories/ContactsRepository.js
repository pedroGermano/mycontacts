const { v4 } = require('uuid')

const contacts = [
  {
    id: v4(),
    name: 'Pedro',
    email: 'pedrogermano232@gmail.com',
    phone: '123123123',
    category_id: v4()
  },
  {
    id: v4(),
    name: 'Germano',
    email: 'devgermano232@gmail.com',
    phone: '333444222',
    category_id: v4()
  },
]

class ContactsRepository{
  findAll(){
    return new Promise((resolve) => {
      resolve(contacts)
    })
  }
  findById(id){
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id)
    ))
  }
}

module.exports = new ContactsRepository()

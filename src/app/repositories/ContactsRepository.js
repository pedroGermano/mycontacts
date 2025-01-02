const { uuid } = require('uuidv4')

const contacts = [
  {
    id: uuid(),
    name: 'Pedro',
    email: 'pedrogermano232@gmail.com',
    phone: '123123123',
    category_id: uuid()
  },
]

class ContactsRepository{
  findAll(){
    return new Promise((resolve, reject) => {
      resolve(contacts)
    })
  }
}

module.exports = new ContactsRepository()

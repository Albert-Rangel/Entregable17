import chai from 'chai'
import supertest from 'supertest'

const expect = chai.expect
const requester = supertest('http://localhost:8080')

describe('test para hacer login y logout de session', () => {

    it('deberia hacer un login', async () => {
        const user = {
            email: 'premium@gmail.com',
            password: "1"

        }
        const { statusCode, ok, _body } = await requester.post('/api/loginandlogoutTest').send(user)

        expect(ok).to.be.equals(true)
    })

})
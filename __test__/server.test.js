'use strict';

const server = require("../src/server");
const supertest = require("supertest");
const request = supertest(app);
const request = supertest(server.app);

describe('Server Test',()=>{
    
    it('POST to /signup to create a new user ',async()=>{
        
        let data ={
            username: 'mayadah',
            password: '1234'
        }
        const data =await request.post('/signup').send(data);
        expect(data.status).toEqual(200);
    });


   
})
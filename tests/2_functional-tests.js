const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

/**
 *  viewing one stock: get request to /api/stock-prices/
 *  viewing one stock and liking it: get request to /api/stock-pirces/
 *  viewing the same stock and liking it again:   Get request to /api/stock-prices
 *  viewing two stock 
 *  viewing two stock and liking it
 * 
 * 
 * 
 * 
 * 
 */
suite('Functional Tests', function() {
    suite('5 functional get request tests',function()
    {
        test('viewing one stock:',function(done)
    {
        chai
            .request(server)
            .get('/api/stock-prices/')
            .set('content-type','application/json')
            .query({stock:'TSLA'})
            .end(function(err,res)
        {
            assert.equal(res,status,200);
            assert.equal(res.body.stockData.stock, 'TLSA');
            assert.exists(res.body.stockData.price,'TLSA has a price');
            done();
        })
    })
    });
        test('viewing one stock and liking it ',function(done)
    {
        chai
            .request(server)
            .get('/api/stock-prices/')
            .set('content-type','application/json')
            .query({stock:'GOLD', like: true})
            .end(function(err,res)
        {
            assert.equal(res,status,200);
            assert.equal(res.body.stockData.stock, 'GOLD');
            assert.equal(res.body.stockData.likes,1);
            assert.exists(res.body.stockData.price,'TLSA has a price');
            done();
        })
    });
        
    test('viewing one stock:',function(done)
    {
        chai
            .request(server)
            .get('/api/stock-prices/')
            .set('content-type','application/json')
            .query({stock:'TSLA'})
            .end(function(err,res)
        {
            assert.equal(res,status,200);
            assert.equal(res.body.stockData.stock, 'GOLD');
            assert.equal(res.body.stockData.likes,1);
            assert.exists(res.body.stockData.price,'GOLD has a price');
            done();
        })
    })

    test('viewing two stock:', function(done)
{
    chai    
        .request(server)
        .get('/api/stock-prices/')
        .set('content-type','application/json')
        .query({stock:['TSLA','AMZN']})
        .end(function(err,res)
    {
        assert.equal(res,status,200);
        assert.equal(res.body.stockData[0].stock, 'TSLA');
        assert.equal(res.body.stockData[1].stock, 'AMZN');
        assert.exists(res.body.stockData[0].price,'TSLA has a price');
        assert.exists(res.body.stockData[1].price,'AMZN has a price');
        done();
    })
        
})

test('viewing two stock and liking them:', function(done)
{
    chai    
        .request(server)
        .get('/api/stock-prices/')
        .set('content-type','application/json')
        .query({stock:['TSLA','AMZN'], like: true})
        .end(function(err,res)
    {
        assert.equal(res,status,200);
        assert.equal(res.body.stockData[0].stock, 'TSLA');
        assert.equal(res.body.stockData[1].stock, 'AMZN');
        assert.exists(res.body.stockData[0].price,'TSLA has a price');
        assert.exists(res.body.stockData[1].price,'AMZN has a price');
        assert.exists(res.body.stockData[0].rel_likes, "has rel_likes");
        assert.exists(res.body.stockData[1].rel_likes, "has rel_likes");
        done();
    })
        
});
 



});

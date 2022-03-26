const React= require('react')
const Def= require('./default')

function home () {
    return (
    <Def>
        <main>
            <h1>HOME</h1>
            
            <div>
            <img src="/images/pizza.jpg" alt="pizza w vegetables" />
            <div>
                Photo by <a href="AUTHOR_LINK">Unknown</a> on <a href="UNSPLASH_LINK">Unsplash</a>
            </div>
            </div>
            
        </main>
        <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>
    </Def>
    )
}

module.exports= home



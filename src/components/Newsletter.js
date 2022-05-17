import React from "react"

const Newsletter = () => (
    <div className="mt-5" style={{display: "flex"}}>
      <div style={{width: "70%"}}>
        <h1>Newsletter</h1>
        <p>Unser Newsletter informiert Sie über unsere Autoren, Veranstaltungen und Neuerscheinungen aus dem Rosenfeld Verlag. Einfach hier registrieren!</p>
      </div>
      <div id="mc_embed_signup" style={{margin: "3em"}}>
        <form action="https://rosenfeld-verlag.us5.list-manage.com/subscribe/post?u=d1dda24b5a06af16d6e38cf5f&amp;id=62f45d29bc" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
          <div id="mc_embed_signup_scroll" style={{padding: "1em"}}>
            <label for="mce-EMAIL">Email:</label>
            <input style={{minWidth: "323px"}} type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="" required />
            <div style={{position: "absolute", left: "-5000px"}} ariaHidden="true"><input type="text" name="b_d1dda24b5a06af16d6e38cf5f_62f45d29bc" tabindex="-1"/>
              <div className="clear">
                <input type="submit" value="Anmelden" name="subscribe" id="mc-embedded-subscribe" className="button"/>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
)


export default Newsletter

import React from 'react';

const Modal = () => {
  return (
        <div id="myModal" className="modal">
          <div className="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">Ongoing Success Plan for Peace of Mind</p>
              <button class="delete modal-close" for="element-toggle" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
              <p className="text-muted black-50">Starting at $100/Mo</p>
            <div class="field">
              <label class="label">Name</label>
              <div class="control has-icons-left">
                <input class="input" type="text" placeholder="Text input" />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left has-icons-right">
                <input class="input is-danger" type="email" placeholder="Email input" value="hello@" />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
              </div>
              <p class="help is-danger">This email is invalid</p>
            </div>

            <div class="field">
              <label class="label">Website URL</label>
              <div class="control has-icons-left">
              <input class="input" type="text" placeholder="Your Website URL" />
                <span class="icon is-small is-left">
                  <i class="fas fa-globe"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <label class="checkbox">
                  <input type="checkbox" />
                  I agree to the <a href="/#">terms and conditions</a>
                </label>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <label class="radio">
                  <input type="radio" name="question" />
                  Yes
                </label>
                <label class="radio">
                  <input type="radio" name="question" />
                  No
                </label>
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link">Submit</button>
              </div>
              <div class="control">
                <button class="button is-link is-light">Cancel</button>
              </div>
            </div>
            </section>
          </div>
        </div>
  )
}

export default Modal
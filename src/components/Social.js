import React from 'react';
import config from '../../config';

export default function Social() {
  return (
    <div className="columns is-mobile is-centered">
      <div className="column is-half">
        <ul className="list-inline list-social footer-nav">
          {config.socialLinks.map(social => {
            const { icon, url, name } = social;
            return (
              <li key={url} className="list-inline-item">
                <a className="is-size-6" href={url} target="_blank" aria-label={name} rel="noreferrer noopener">
                  <i className={`fab  ${icon}`}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

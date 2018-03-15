import React from 'react'
import { slugify } from '../utils/functions'
import Speakers from './Speakers'
import Image from './Image'

const SignatureTalks = ({ talks, allData }) =>
  talks.map(({ day, talkTitle: title, time, span }, i) => {
    const speakers = allData.filter((speaker) => speaker.talkTitle === title)

    const classes = 'event__talk'

    return (
      <div key={i} className={classes} id={slugify(title)}>
        <div className="event__talk__content">
          <div className="event__talk__media">
            <Image
              src="https://blockstack.imgix.net/7c53ed6a-c4eb-4d99-94fc-2e2ed9f62652_p3020241.jpg?auto=format&w=1400"
              alt={title}
            />
          </div>
          <div className="event__talk__details">
            <h4>
              <a href={`#${slugify(title)}`}>{title}</a>
            </h4>
            <div className="event__talk__speakers__container">
              <div className="event__talk__speakers">
                <Speakers speakers={speakers} />
              </div>
            </div>
            <div className="p-t-20">
              <a href="#" className="btn btn-secondary btn-sm">
                Watch
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  })

export default SignatureTalks

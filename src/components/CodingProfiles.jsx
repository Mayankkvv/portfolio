import { motion } from 'framer-motion'
import { SiLeetcode, SiCodeforces, SiCodechef } from 'react-icons/si'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import codingProfiles from '../utils/codingProfilesData'
import './CodingProfiles.css'
import RevealText from './RevealText'

const icons = {
  LeetCode: SiLeetcode,
  Codeforces: SiCodeforces,
  CodeChef: SiCodechef,
  GitHub: FaGithub,
}

function CodingProfiles() {
  return (
    <section id="coding-profiles" className="coding-profiles">
      <h2 className="section-title"><RevealText text="Coding Profiles" /></h2>
      <div className="coding-profiles-grid">
        {codingProfiles.map((profile, i) => {
          const Icon = icons[profile.platform]
          return (
            <motion.a
              key={profile.platform}
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              className="profile-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="profile-card-top">
                <Icon size={28} />
                <FaExternalLinkAlt size={12} className="profile-card-external" />
              </div>
              <h3>{profile.platform}</h3>
              <p className="profile-handle">@{profile.handle}</p>
              <div className="profile-stats">
                {profile.stats.map((s) => (
                  <div key={s.label} className="profile-stat">
                    <span className="profile-stat-value">{s.value}</span>
                    <span className="profile-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </motion.a>
          )
        })}
      </div>
    </section>
  )
}

export default CodingProfiles
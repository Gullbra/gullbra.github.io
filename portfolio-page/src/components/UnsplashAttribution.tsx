
import '../styles/components.unsplash-attribution.css'

interface IUnsplashProps {
  aProfile: string
  name: string
  aUnsplash: string
}
/*
aProfile={"https://unsplash.com/@anniespratt?utm_source=your_app_name&utm_medium=referral"}
name={"Annie Spratt"}
aUnsplash={"https://unsplash.com/?utm_source=your_app_name&utm_medium=referral"}
*/

const UnsplashAttribution = ({aProfile, name, aUnsplash}:IUnsplashProps) => {
  return (
    <div className="test-class-wr">
      Background Image by 
      <a className="test-class-a"
        href={aProfile}>
        {name}
      </a> 
      on 
      <a className="test-class-a"
        href={aUnsplash}>
        Unsplash
      </a>
    </div>
  )
}

export default UnsplashAttribution

import '../styles/components.unsplash-attribution.css'

interface IUnsplashProps {
  aProfile: string
  name: string
  aUnsplash: string
}

const UnsplashAttribution = ({aProfile, name, aUnsplash}:IUnsplashProps) => {
  const appName = "martin_gullbrandssons_portfolio"

  return (
    <div className="test-class-wr">
      Background Image by 
      <a className="test-class-a"
        href={aProfile.replace(/utm_source=[^&]+/, `utm_source=${appName}`)}>
        {name}
      </a> 
      on 
      <a className="test-class-a"
        href={aUnsplash.replace(/utm_source=[^&]+/, `utm_source=${appName}`)}>
        Unsplash
      </a>
    </div>
  )
}

export default UnsplashAttribution
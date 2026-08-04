import useRipple from '../hooks/useRipple'
import './RippleButton.css'

function RippleButton({ as: Component = 'button', className = '', onClick, children, ...props }) {
  const { ripples, addRipple } = useRipple()

  const handleClick = (e) => {
    addRipple(e)
    if (onClick) onClick(e)
  }

  return (
    <Component className={`ripple-btn ${className}`} onClick={handleClick} {...props}>
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="ripple"
          style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
        />
      ))}
    </Component>
  )
}

export default RippleButton
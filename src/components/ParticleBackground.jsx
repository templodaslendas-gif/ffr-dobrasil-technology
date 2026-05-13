import React, { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let animId
    let particles = []
    let mouse = { x: null, y: null }

    const CONFIG = {
      count: 70,
      maxDist: 130,
      speed: 0.35,
      radius: 1.5,
      colorNode: 'rgba(0, 200, 83,',
      colorLine: 'rgba(0, 200, 83,',
      colorNodeAlt: 'rgba(245, 200, 66,',
      colorLineAlt: 'rgba(41, 121, 255,',
      mouseInfluence: 120,
    }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * CONFIG.speed
        this.vy = (Math.random() - 0.5) * CONFIG.speed
        this.r = Math.random() * CONFIG.radius + 0.5
        this.alt = Math.random() > 0.85
        this.pulse = Math.random() * Math.PI * 2
        this.pulseSpeed = 0.02 + Math.random() * 0.02
      }
      update() {
        this.x += this.vx
        this.y += this.vy
        this.pulse += this.pulseSpeed

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1

        if (mouse.x !== null) {
          const dx = this.x - mouse.x
          const dy = this.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONFIG.mouseInfluence) {
            const force = (CONFIG.mouseInfluence - dist) / CONFIG.mouseInfluence * 0.015
            this.x += dx * force
            this.y += dy * force
          }
        }
      }
      draw() {
        const alpha = 0.5 + Math.sin(this.pulse) * 0.3
        const color = this.alt ? CONFIG.colorNodeAlt : CONFIG.colorNode
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = `${color}${alpha})`
        ctx.fill()
      }
    }

    const init = () => {
      resize()
      particles = Array.from({ length: CONFIG.count }, () => new Particle())
    }

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CONFIG.maxDist) {
            const alpha = (1 - dist / CONFIG.maxDist) * 0.25
            const useAlt = particles[i].alt && particles[j].alt
            const color = useAlt ? CONFIG.colorLineAlt : CONFIG.colorLine
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `${color}${alpha})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }
    }

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => { p.update(); p.draw() })
      drawLines()
      animId = requestAnimationFrame(loop)
    }

    const onMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    const onMouseLeave = () => { mouse.x = null; mouse.y = null }

    let resizeTimer
    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        resize()
        particles.forEach(p => p.reset())
      }, 100)
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)

    init()
    loop()

    return () => {
      cancelAnimationFrame(animId)
      clearTimeout(resizeTimer)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  )
}

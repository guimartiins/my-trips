import { Map } from '.'
import { render, screen } from '@testing-library/react'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}))

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(screen.getByRole('link', { name: /leaflet/i })).toBeInTheDocument()
  })
  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Petrópolis',
      slug: 'petropolis',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    render(<Map places={[place]} />)

    expect(screen.getByTitle(/Petrópolis/i)).toBeInTheDocument()
  })
})

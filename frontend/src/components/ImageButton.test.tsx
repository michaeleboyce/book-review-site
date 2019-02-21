import * as React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'
import ImageButton from './ImageButton';

afterEach(cleanup)

test('call handleChange when clicked', () => {
  const handleChange = jest.fn()
  const renderOutput = render(<ImageButton handleChange={handleChange} />)
  renderOutput.getByLabelText('file-upload-label').
  expect(handleChange).toBeCalledTimes(1)
})
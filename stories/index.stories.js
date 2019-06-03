import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'

// Uncomment to test dist
// import { BlueButton, GreenButton } from '../dist'
import BlueButton from '../src/components/button/BlueButton'
import GreenButton from '../src/components/button/GreenButton'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button!</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))

storiesOf('BlueButton', module).add('Default', () => (
  <BlueButton text="This is a button" onClick={console.log} />
))

storiesOf('GreenButton', module).add('Default', () => (
  <GreenButton text="This is a button" onClick={console.log} />
))

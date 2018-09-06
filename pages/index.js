import Link from 'next/link'
import '../css/react-md.light_blue-yellow.min.css'
import { PureComponent } from 'react'

import Avatar from 'react-md/lib/Avatars'
import Button from 'react-md/lib/Buttons/Button'
import FontIcon from 'react-md/lib/FontIcons'
import ListItem from 'react-md/lib/Lists/ListItem'
import NavigationDrawer from 'react-md/lib/NavigationDrawers'
import SelectField from 'react-md/lib/SelectFields'
import avatarSrc from '../img/img1.png';

const drawerHeaderChildren = [
  <Avatar
    key={avatarSrc}
    src={avatarSrc}
    role='presentation'
    iconSized
    style={{ alignSelf: 'center', marginLeft: 16, marginRight: 16, flexShrink: 0 }}
  />,
  <SelectField
    id='account-switcher'
    defaultValue='Jonathan'
    menuItems={['Jonathan', 'Fred']}
    key='account-switcher'
    position={SelectField.Positions.BELOW}
    className='md-select-field--toolbar'
  />
]

class NavigationLink extends PureComponent {
  // NOTE: Don't try using Stateless (function) component here. `ref` is
  // required by React-MD/AccessibleFakeButton, but Stateless components
  // don't have one by design:
  // https://github.com/facebook/react/issues/4936
  render () {
    const { href, as, children, ..._props } = this.props
    return (
      <div {..._props} style={{padding: 0}}>
        <Link href={href} as={as}>
          <a className='md-list-tile md-list-tile--mini' style={{width: '100%', overflow: 'hidden'}}>
            {children}
          </a>
        </Link>
      </div>
    )
  }
}

export default () => {
  const closeButton = (
    <Button
      icon
      tooltipLabel='Close the interactive demo'
      tooltipDelay={150}
      tooltipPosition='right'>
      close
    </Button>
  )

  return (
    <div>
      <NavigationDrawer
        navItems={[
          <ListItem
            key='0'
            component={NavigationLink}
            href='/'
            leftIcon={<FontIcon>inbox</FontIcon>}
            tileClassName='md-list-tile--mini'
            primaryText={'Root'}
          />,
          <ListItem
            key='1'
            component={NavigationLink}
            href='/non-existing-page'
            leftIcon={<FontIcon>star</FontIcon>}
            tileClassName='md-list-tile--mini'
            primaryText={'501 page'}
          />
        ]}
        contentClassName='md-grid'
        drawerHeaderChildren={drawerHeaderChildren}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
        tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
        desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
        toolbarTitle='Hello, World'
        toolbarActions={closeButton}
      >
        <h1>Hello World</h1>
      </NavigationDrawer>
    </div>
  )
}

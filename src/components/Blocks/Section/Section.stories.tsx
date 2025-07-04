import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon28Chat } from 'icons/28/chat';
import { Icon28Devices } from 'icons/28/devices';
import { Icon28Stats } from 'icons/28/stats';
import { Language30 } from 'icons/pack/settings/30/Language30';
import { setControlsTypes } from 'stories/controls';

import { Cell } from 'components/Blocks/Cell/Cell';
import { IconContainer } from 'components/Blocks/IconContainer/IconContainer';
import { List } from 'components/Blocks/List/List';
import { Input } from 'components/Form/Input/Input';
import { NavigationCell } from '../Cell/components/NavigationCell/NavigationCell';
import { Section } from './Section';

const meta = {
  title: 'Blocks/Section',
  component: Section,
  argTypes: setControlsTypes(['header', 'footer'], 'text'),
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

const cells = [
  {
    id: 1,
    icon: <Icon28Chat />,
    text: 'Chat Settings',
  },
  {
    id: 2,
    icon: <Icon28Devices />,
    text: 'Data and Storage',
  },
  {
    id: 3,
    icon: <Icon28Stats />,
    text: 'Devices',
  },
];

export const Playground: Story = {
  render: (args) => (
    <List
      style={{
        background: 'var(--tgui--secondary_bg_color)',
        padding: '40px',
        width: 500,
      }}
    >
      <Section
        header="Main Settings"
        footer="The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux."
        {...args}
      >
        {cells.map((cell) => (
          <Cell
            key={cell.id}
            before={<IconContainer>{cell.icon}</IconContainer>}
          >
            {cell.text}
          </Cell>
        ))}
        <NavigationCell
          icon={<Language30 color="mediumpurple" />}
          after="English"
        >
          Language
        </NavigationCell>
      </Section>
      <Section
        header="Personal Information"
        footer="The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux."
        {...args}
      >
        <Input
          header="First name"
          placeholder="21 y.o. designer from San Francisco"
        />
        <Input
          header="Last name"
          placeholder="21 y.o. designer from San Francisco"
        />
        <Input
          status="error"
          header="Phone number"
          placeholder="Enter a correct phone number"
        />
        <Input
          header="Address"
          placeholder="This address is invalid"
        />
      </Section>
    </List>
  ),
} satisfies Story;

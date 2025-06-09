import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon28Chat, Icon28Devices, Icon28Stats } from 'icons';
import { Language30 } from 'icons/pack';
import { hideControls } from 'stories/controls';

import {
  Cell,
  IconContainer,
  List,
  NavigationCell,
  Section,
} from 'components/Blocks';
import { Input } from 'components/Form';
import type { SegmentedControlProps } from './SegmentedControl';
import { SegmentedControl } from './SegmentedControl';

const meta = {
  title: 'Navigation/SegmentedControl',
  component: SegmentedControl,
  argTypes: hideControls('children'),
} satisfies Meta<typeof SegmentedControl>;

export default meta;

const labels = [
  {
    label: 'Label',
    value: 'label',
  },
  {
    label: 'Label 2',
    value: 'label2',
  },
  {
    label: 'Label 3',
    value: 'label3',
  },
];

const cells = [
  {
    id: 1,
    color: 'orange',
    icon: <Icon28Chat />,
    text: 'Chat Settings',
  },
  {
    id: 2,
    color: 'dodgerblue',
    icon: <Icon28Devices />,
    text: 'Data and Storage',
  },
  {
    id: 3,
    color: 'darkgray',
    icon: <Icon28Stats />,
    text: 'Devices',
  },
];

export const Playground: StoryObj<SegmentedControlProps> = {
  render: (args) => {
    const [selected, setSelected] = useState(labels[0]!.value);

    return (
      <SegmentedControl {...args}>
        {labels.map(({ value, label }) => (
          <SegmentedControl.Item
            key={value}
            selected={selected === value}
            onClick={() => setSelected(value)}
          >
            {label}
          </SegmentedControl.Item>
        ))}
      </SegmentedControl>
    );
  },
  decorators: [
    (Component) => (
      <List
        style={{
          background: 'var(--tgui--secondary_bg_color)',
          width: 500,
        }}
      >
        <Component />
        <Section
          header="Main Settings"
          footer="The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux."
        >
          {cells.map((cell) => (
            <Cell
              key={cell.id}
              before={
                <IconContainer color={cell.color}>{cell.icon}</IconContainer>
              }
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
  ],
};

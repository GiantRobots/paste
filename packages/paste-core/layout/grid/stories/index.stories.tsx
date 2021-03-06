import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, select, text} from '@storybook/addon-knobs';
import {DefaultTheme, ThemeShape} from '@twilio-paste/theme';
import {Box} from '@twilio-paste/box';
import {Card} from '@twilio-paste/card';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';
import {Text} from '@twilio-paste/text';
import {Truncate} from '@twilio-paste/truncate';
import {Grid, Column} from '../src';

const spaceOptions = Object.keys(DefaultTheme.space);

storiesOf('Layout|Grid', module)
  .addDecorator(withKnobs)
  .add('Grid - 12 Column and Gutter Support', () => {
    const asValue = text('as', 'div') as keyof JSX.IntrinsicElements;
    const gutterValue = select('gutter', spaceOptions, 'space0') as keyof ThemeShape['space'];
    return (
      <Grid as={asValue} gutter={gutterValue}>
        <Column as={asValue}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            1
          </Box>
        </Column>
        <Column as={asValue}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            2
          </Box>
        </Column>
        <Column as={asValue}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            3
          </Box>
        </Column>
        <Column as={asValue}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            4
          </Box>
        </Column>
        <Column as={asValue}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            5
          </Box>
        </Column>
        <Column as={asValue}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            6
          </Box>
        </Column>
        <Column as={asValue}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            7
          </Box>
        </Column>
        <Column as={asValue}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            8
          </Box>
        </Column>
        <Column as={asValue}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            9
          </Box>
        </Column>
        <Column as={asValue}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            10
          </Box>
        </Column>
        <Column as={asValue}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            11
          </Box>
        </Column>
        <Column as={asValue}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            12
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 1 column', () => {
    return (
      <Grid gutter="space20">
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            1
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 2 column', () => {
    return (
      <Grid gutter="space20">
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            1
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            2
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 3 Column', () => {
    return (
      <Grid gutter="space20">
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            1
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            2
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            3
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 4 Column', () => {
    return (
      <Grid gutter="space20">
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            1
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            2
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            3
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            4
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 6 Column', () => {
    return (
      <Grid gutter="space20">
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            1
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            2
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            3
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            4
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            5
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            6
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 5, 5, and 2 Column', () => {
    return (
      <Grid gutter="space20">
        <Column span={5}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            5
          </Box>
        </Column>
        <Column span={5}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            5
          </Box>
        </Column>
        <Column span={2}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            2
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 6 and 6 Column', () => {
    return (
      <Grid gutter="space20">
        <Column span={6}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            6
          </Box>
        </Column>
        <Column span={6}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            6
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 8 and 4 Column', () => {
    return (
      <Grid gutter="space20">
        <Column span={8}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            8
          </Box>
        </Column>
        <Column span={4}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            4
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 9 and 3 Column', () => {
    return (
      <Grid gutter="space20">
        <Column span={9}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            9
          </Box>
        </Column>
        <Column span={3}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            3
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 10 and 2 Column', () => {
    return (
      <Grid gutter="space20">
        <Column span={10}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            10
          </Box>
        </Column>
        <Column span={2}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            2
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 11 and 1 Column', () => {
    return (
      <Grid gutter="space20">
        <Column span={11}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            11
          </Box>
        </Column>
        <Column span={1}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            1
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 2 Column and Single Columns', () => {
    return (
      <Grid gutter="space20">
        <Column span={2}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            2
          </Box>
        </Column>
        <Column span={1}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            1
          </Box>
        </Column>
        <Column span={1}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            1
          </Box>
        </Column>
        <Column span={1}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            1
          </Box>
        </Column>
        <Column span={1}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            1
          </Box>
        </Column>
        <Column span={1}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            1
          </Box>
        </Column>
        <Column span={1}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            1
          </Box>
        </Column>
        <Column span={1}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            1
          </Box>
        </Column>
        <Column span={1}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            1
          </Box>
        </Column>
        <Column span={1}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            1
          </Box>
        </Column>
        <Column span={1}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            1
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 8 Column and 4 Single Columns', () => {
    return (
      <Grid gutter="space20">
        <Column span={8}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            8
          </Box>
        </Column>
        <Column span={1}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            1
          </Box>
        </Column>
        <Column span={1}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            1
          </Box>
        </Column>
        <Column span={1}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            1
          </Box>
        </Column>
        <Column span={1}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            1
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 8 Column Span with Offset', () => {
    return (
      <Grid>
        <Column span={[12, 6, 8]} offset={[0, 3, 2]}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            8
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 2 Columns with Offset', () => {
    return (
      <Grid gutter="space20">
        <Column span={[12, 6, 6]} offset={[0, 2, 2]}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            6
          </Box>
        </Column>
        <Column span={4}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            4
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - Right Offset Column', () => {
    return (
      <Grid>
        <Column span={4}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            4
          </Box>
        </Column>
        <Column span={4} offset={4}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            4
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - Multiple Offset Columns', () => {
    return (
      <Grid>
        <Column span={2} offset={2}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            2
          </Box>
        </Column>
        <Column span={2} offset={6}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            2
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 2 Column Sidebar', () => {
    return (
      <Grid gutter="space20">
        <Column span={3}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            3
          </Box>
        </Column>
        <Column span={9}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            9
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 3 Column Wider Center Column', () => {
    return (
      <Grid gutter="space60">
        <Column span={2}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            2
          </Box>
        </Column>
        <Column span={8}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            8
          </Box>
        </Column>
        <Column span={2}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            2
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 2 Column Responsive', () => {
    return (
      <Grid gutter={['space20', 'space60', 'space90']}>
        <Column span={[2, 6, 8]}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            Responsive Column Size
          </Box>
        </Column>
        <Column span={[10, 6, 4]}>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            Responsive Column Size
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 2 Column Responsive Stack', () => {
    return (
      <Grid gutter="space20" vertical={[true, false, false]}>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            Responsive Column Size
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
            Responsive Column Size
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - Nested Column', () => {
    return (
      <Grid gutter="space40">
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            1
          </Box>
        </Column>
        <Column>
          <Box height="size40">
            <Grid gutter="space20">
              <Column>
                <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
                  Nested Column 1
                </Box>
              </Column>
              <Column>
                <Box backgroundColor="colorBackgroundPrimaryLight" height="size40">
                  Nested Column 2
                </Box>
              </Column>
            </Grid>
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40">
            3
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 3 Column Card Layout', () => {
    return (
      <Grid gutter="space70" vertical={[true, false, false]}>
        <Column>
          <Card padding="space70">
            <Heading as="h2" variant="heading20">
              Card Heading
            </Heading>
            <Text as="p">Body</Text>
          </Card>
        </Column>
        <Column>
          <Card padding="space70">
            <Heading as="h2" variant="heading20">
              Card Heading
            </Heading>
            <Text as="p">Body</Text>
          </Card>
        </Column>
        <Column>
          <Card padding="space70">
            <Heading as="h2" variant="heading20">
              Card Heading
            </Heading>
            <Text as="p">Body</Text>
          </Card>
        </Column>
      </Grid>
    );
  })
  .add('Grid - Wrapped 2 Column Card Layout', () => {
    return (
      <Grid gutter="space70" vertical={[true, false, false]}>
        <Column span={6}>
          <Card padding="space70">
            <Heading as="h2" variant="heading20">
              Card Heading
            </Heading>
            <Text as="p">Body</Text>
          </Card>
        </Column>
        <Column span={6}>
          <Card padding="space70">
            <Heading as="h2" variant="heading20">
              Card Heading
            </Heading>
            <Text as="p">Body</Text>
          </Card>
        </Column>
        <Column span={6}>
          <Box marginTop="space70">
            <Card padding="space70">
              <Heading as="h2" variant="heading20">
                Card Heading
              </Heading>
              <Text as="p">Body</Text>
            </Card>
          </Box>
        </Column>
        <Column span={6}>
          <Box marginTop="space70">
            <Card padding="space70">
              <Heading as="h2" variant="heading20">
                Card Heading
              </Heading>
              <Text as="p">Body</Text>
            </Card>
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - 2 Column Content with Card', () => {
    return (
      <Grid gutter="space70" vertical={[true, false, false]}>
        <Column span={8}>
          <Heading as="h2" variant="heading20">
            Content Heading
          </Heading>
          <Paragraph>
            Kale chips distillery authentic, portland etsy cloud bread vinyl gentrify drinking vinegar viral meh hot
            chicken bitters fashion axe palo santo. Chillwave fixie sustainable <i>helvetica</i> etsy.
          </Paragraph>
          <Paragraph>
            Prism whatever ethical, gochujang <strong>edison bulb</strong> put a bird on it kitsch. Pop-up 90&apos;s la
            croix tumeric, palo santo chia try-hard direct trade tote bag roof party scenester kitsch stumptown
            intelligentsia. Literally heirloom blue bottle etsy.
          </Paragraph>
        </Column>
        <Column span={4}>
          <Card padding="space70">
            <Heading as="h2" variant="heading20">
              Card Heading
            </Heading>
            <Text as="p">Body</Text>
          </Card>
        </Column>
      </Grid>
    );
  })
  .add('Grid - Equal height columns', () => {
    return (
      <>
        <Grid gutter="space30" vertical={[true, true, false]} equalColumnHeights>
          <Column span={4}>
            <Card padding="space70">
              <Heading as="h2" variant="heading20">
                Why use Paste?
              </Heading>
              <Paragraph marginBottom="space0">
                Paste helps you rapidly prototype, and ship great, inclusive customer experiences. It makes it easy to
                do the right thing, cheaply.
              </Paragraph>
            </Card>
          </Column>
          <Column span={4}>
            <Card padding="space70">
              <Heading as="h2" variant="heading20">
                Inclusive by default
              </Heading>
              <Paragraph marginBottom="space0">
                Paste meets WCAG 2.1 AA standards in the design and development of our components, making it even easier
                to build accessibly.
              </Paragraph>
              <Paragraph marginBottom="space0">
                Paste meets WCAG 2.1 AA standards in the design and development of our components, making it even easier
                to build accessibly.
              </Paragraph>
            </Card>
          </Column>
          <Column span={4}>
            <Card padding="space70">
              <Heading as="h2" variant="heading20">
                Get up and running
              </Heading>
              <Paragraph marginBottom="space0">
                Whether you’re a designer or developer, setting up Paste is easy and only takes a few minutes!
              </Paragraph>
            </Card>
          </Column>
        </Grid>
        <Grid gutter="space30" equalColumnHeights>
          <Column span={4}>
            <Card padding="space70">
              <Heading as="h2" variant="heading20">
                Why use Paste?
              </Heading>
              <Paragraph marginBottom="space0">
                Paste helps you rapidly prototype, and ship great, inclusive customer experiences. It makes it easy to
                do the right thing, cheaply.
              </Paragraph>
            </Card>
          </Column>
          <Column span={4}>
            <Card padding="space70">
              <Heading as="h2" variant="heading20">
                Inclusive by default
              </Heading>
              <Paragraph marginBottom="space0">
                Paste meets WCAG 2.1 AA standards in the design and development of our components, making it even easier
                to build accessibly.
              </Paragraph>
              <Paragraph marginBottom="space0">
                Paste meets WCAG 2.1 AA standards in the design and development of our components, making it even easier
                to build accessibly.
              </Paragraph>
            </Card>
          </Column>
          <Column span={4}>
            <Card padding="space70">
              <Heading as="h2" variant="heading20">
                Get up and running
              </Heading>
              <Paragraph marginBottom="space0">
                Whether you’re a designer or developer, setting up Paste is easy and only takes a few minutes!
              </Paragraph>
            </Card>
          </Column>
        </Grid>
      </>
    );
  })
  .add('Grid - Containing long content', () => {
    return (
      <Box width="size50">
        <Text as="p" marginBottom="space100">
          Proving that long content shouldn&rsquo;t break out from it&rsquo;s flex container width
        </Text>
        <Grid gutter="space70">
          <Column span={8}>
            <Truncate>http://www.extremelylongurlthatmightbreakthelayout.com</Truncate>
          </Column>
          <Column span={4}>
            <Truncate>http://www.extremelylongurlthatmightbreakthelayout.com</Truncate>
          </Column>
        </Grid>
        <Grid gutter="space70">
          <Column>
            <Truncate>http://www.extremelylongurlthatmightbreakthelayout.com</Truncate>
          </Column>
          <Column>
            <Truncate>http://www.extremelylongurlthatmightbreakthelayout.com</Truncate>
          </Column>
        </Grid>
      </Box>
    );
  });

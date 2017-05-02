import React from 'react';
import { Header, Icon, Form, Dropdown, Button, Popup } from 'semantic-ui-react';

import {
  ParkingSizes,
  Distances,
  Pricings,
  ParkingTypes,
  Locations,
  VehicleTypes,
  Inserted,
  Durations
} from '../../constants/dropdownItems';

const SearchPage = () => {
  return (
    <div>
      <Header as="h4" icon textAlign="center">
        <Icon name="search" />
        Search
      <Header.Subheader>
        Find parking according to your preferences
      </Header.Subheader>
      </Header>

      <Form>
        <Form.Input
          width={4}
          required
          label="Address"
          placeholder="Address"
        />

        <Form.Field width={4}>
          <label>Distance</label>
          <Dropdown
            placeholder="Distance"
            fluid
            selection
            options={Distances}
          />
        </Form.Field>

        <Form.Field width={4}>
          <label>Pricing</label>
          <Dropdown
            placeholder="Pricing"
            fluid
            multiple
            selection
            options={Pricings}
          />
        </Form.Field>

        <Form.Field width={4}>
          <label>Parking size</label>
          <Dropdown
            placeholder="Parking size"
            fluid
            multiple
            selection
            options={ParkingSizes}
          />
        </Form.Field>

        <Form.Field width={4}>
          <label>Vehicle type</label>
          <Dropdown
            placeholder="Vehicle type"
            fluid
            selection
            options={VehicleTypes}
          />
        </Form.Field>

        <Form.Field width={4}>
          <label>Parking type</label>
          <Dropdown
            placeholder="Parking type"
            fluid
            multiple
            selection
            options={ParkingTypes}
          />
        </Form.Field>

        <Form.Checkbox label="Person in wheelchair" toggle />

        <Form.Field width={4}>
          <label>Location</label>
          <Dropdown
            placeholder="Location"
            fluid
            multiple
            selection
            options={Locations}
          />
        </Form.Field>

        <Form.Field width={4}>
          <Popup
            trigger={<label>Inserted</label>}
            content="Time of parking creation"
            on="hover"
          />
          <Dropdown
            placeholder="Inserted"
            fluid
            selection
            options={Inserted}
          />
        </Form.Field>

        <Form.Field width={4}>
          <Popup
            trigger={<label>Duration</label>}
            content="Duration of your parking"
            on="hover"
          />
          <Dropdown
            placeholder="Duration"
            fluid
            selection
            options={Durations}
          />
        </Form.Field>

        <Form.Checkbox label="Confirmed only" toggle />

        <Button.Group>
          <Button>Reset</Button>
          <Button.Or />
          <Button>Search</Button>
        </Button.Group>
      </Form>
    </div>
  );
};

export default SearchPage;
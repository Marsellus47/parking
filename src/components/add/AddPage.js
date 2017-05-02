import React, { Component } from 'react';
import { Header, Icon, Form, Dropdown, Button } from 'semantic-ui-react';

import {
  ParkingSizes,
  Pricings,
  ParkingTypes,
  Locations,
  VehicleTypes
} from '../../constants/dropdownItems';

class AddPage extends Component {
  constructor(props) {
    super(props);

    this.defaultState = {
      address: '',
      pricing: 0,
      parkingSize: 0,
      vehicleType: [],
      count: 0,
      parkingType: [],
      location: 0,
      whelchair: false
    };

    this.state = this.defaultState;
    this.handleChange = this.handleChange.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleChange(event, { name, value }) {
    this.setState({ [name]: value });
  }

  resetForm(event) {
    event.preventDefault();
    this.setState(this.defaultState);
  }

  validateForm(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Header as="h4" icon textAlign="center">
          <Icon name="add" />
          Add
      <Header.Subheader>
            Let others know about new parking
      </Header.Subheader>
        </Header>

        <Form>
          <Form.Input
            width={4}
            required
            label="Address"
            placeholder="Address"
            name="address"
            onChange={this.handleChange}
          />

          <Form.Field width={4}>
            <label>Pricing</label>
            <Dropdown
              placeholder="Pricing"
              fluid
              selection
              options={Pricings}
              name="pricing"
              onChange={this.handleChange}
            />
          </Form.Field>

          <Form.Field width={4}>
            <label>Parking size</label>
            <Dropdown
              placeholder="Parking size"
              fluid
              selection
              options={ParkingSizes}
              name="parkingSize"
              onChange={this.handleChange}
            />
          </Form.Field>

          <Form.Field width={4}>
            <label>Vehicle type</label>
            <Dropdown
              placeholder="Vehicle type"
              fluid
              multiple
              selection
              options={VehicleTypes}
              name="vehicleType"
              onChange={this.handleChange}
            />
          </Form.Field>

          <Form.Input
            width={4}
            label="Count"
            placeholder="Count"
            type="number"
            name="count"
            onChange={this.handleChange}
          />

          <Form.Field width={4}>
            <label>Parking type</label>
            <Dropdown
              placeholder="Parking type"
              fluid
              multiple
              selection
              options={ParkingTypes}
              name="parkingType"
              onChange={this.handleChange}
            />
          </Form.Field>

          <Form.Checkbox
            label="Person in wheelchair"
            toggle
            onChange={this.changeWhelchair}
          />

          <Form.Field width={4}>
            <label>Location</label>
            <Dropdown
              placeholder="Location"
              fluid
              selection
              options={Locations}
              name="location"
              onChange={this.handleChange}
            />
          </Form.Field>

          <Button.Group>
            <Button onClick={this.resetForm}>Reset</Button>
            <Button.Or />
            <Button onClick={this.validateForm}>Validate</Button>
            <Button.Or />
            <Button>Search</Button>
          </Button.Group>
        </Form>
      </div>
    );
  }
}

export default AddPage;
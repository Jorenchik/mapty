import React from "react";

// Styles
import { Wrapper, Content } from "./Form.styles";

const Form = () => (
  <Wrapper>
    <Content>
      <form class="form hidden">
        <div class="form__row">
          <label class="form__label">Type</label>
          <select class="form__input form__input--type">
            <option value="running">Running</option>
            <option value="cycling">Cycling</option>
          </select>
        </div>
        <div class="form__row">
          <label class="form__label">Distance</label>
          <input class="form__input form__input--distance" placeholder="km" />
        </div>
        <div class="form__row">
          <label class="form__label">Duration</label>
          <input class="form__input form__input--duration" placeholder="min" />
        </div>
        <div class="form__row">
          <label class="form__label">Cadence</label>
          <input
            class="form__input form__input--cadence"
            placeholder="step/min"
          />
        </div>
        <div class="form__row form__row--hidden">
          <label class="form__label">Elev Gain</label>
          <input
            class="form__input form__input--elevation"
            placeholder="meters"
          />
        </div>
        <button class="form__btn">OK</button>
      </form>
    </Content>
  </Wrapper>
);

export default Form;

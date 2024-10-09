/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import {render} from '@unit-testing';
import {ReactElement} from 'react';
import Typography from '../../Typography';
import Stepper from '../Stepper';

const steps: ReactElement[] = [
  <Typography>Step 1</Typography>,
  <Typography>Step 2</Typography>,
  <Typography>Step 3</Typography>,
  <Typography>Step 4</Typography>,
];

describe('Stepper', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<Stepper steps={steps} currentStep={0} />);
    expect(baseElement).toBeTruthy();
  });

  it('should match the snapshot', () => {
    const {baseElement} = render(<Stepper steps={steps} currentStep={0} />);
    expect(baseElement).toMatchSnapshot();
  });
});

/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
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

import MuiAvatar, {AvatarProps as MuiAvatarProps} from '@mui/material/Avatar';
import clsx from 'clsx';
import {FC, ReactElement} from 'react';
import {WithWrapperProps} from '../../models';
import {composeComponentDisplayName} from '../../utils';
import './avatar.scss';

export type AvatarProps = MuiAvatarProps;

const COMPONENT_NAME: string = 'Avatar';

const Avatar: FC<AvatarProps> & WithWrapperProps = (props: AvatarProps): ReactElement => {
  const {className, ...rest} = props;

  const classes: string = clsx('oxygen-ui-avatar', className);

  return <MuiAvatar className={classes} {...rest} />;
};

Avatar.displayName = composeComponentDisplayName(COMPONENT_NAME);
Avatar.muiName = COMPONENT_NAME;
Avatar.defaultProps = {};

export default Avatar;

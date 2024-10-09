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

const path = require('path');

module.exports = {
  extends: [
    'plugin:@wso2/react',
    'plugin:@wso2/strict',
    'plugin:@wso2/internal',
    'plugin:@wso2/jest',
    'plugin:@wso2/prettier',
    'plugin:react/jsx-runtime'
  ],
  parserOptions: {
    project: [
      path.resolve(__dirname, 'tsconfig.lib.json'),
      path.resolve(__dirname, 'tsconfig.spec.json'),
      path.resolve(__dirname, 'tsconfig.eslint.json'),
    ],
  },
  rules: {
    'prefer-regex-literals': 'off'
  }
};

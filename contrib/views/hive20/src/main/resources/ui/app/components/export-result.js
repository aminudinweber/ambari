/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Ember from 'ember';

export default Ember.Component.extend({

  label: null,
  confirmText: 'Confirm',
  rejectText: 'Reject',
  isExportResultSuccessMessege:false,
  isExportResultFailureMessege:false,

  jobId: 0,

  pathName: Ember.computed('jobId', function() {
    return 'Worksheet_' + this.get('jobId');
  }),

  labelIcon: null,
  confirmIcon: null,
  rejectIcon: null,

  closable: true,
  titleClass: 'primary',
  confirmClass: 'primary',
  rejectClass: 'default',

  actions: {
    confirm() {
      let pathName = Ember.$("input.path-name").val();
      this.sendAction('confirm', this.get('jobId'), pathName);
    },

    reject() {
      this.sendAction('reject');
    }
  }
});

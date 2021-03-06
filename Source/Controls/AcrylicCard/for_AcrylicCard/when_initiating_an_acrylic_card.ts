// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import 'aurelia-polyfills';
import { AcrylicCard } from '../AcrylicCard';

describe('when initiating an acrylic card', () => {
  let acrylicCard: AcrylicCard;

  beforeEach(() => {
    acrylicCard = new AcrylicCard();
  });

  it('should not have set width', () => acrylicCard.width.should.equal(0));
  it('should have set an unique identificator', () => acrylicCard.uniqueIdentifier.should.not.be.empty);
  it('should have set an unique identificator', () => acrylicCard.uniqueCardCssClass.should.not.be.empty);
});

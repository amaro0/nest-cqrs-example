import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { HeroFoundItemEvent } from '../impl/hero-found-item.event';
import * as crypto from 'crypto';
import * as bcrypt from 'bcryptjs';
import * as util from 'util';

const promisifyedHash = util.promisify(bcrypt.hash)

@EventsHandler(HeroFoundItemEvent)
export class HeroFoundItemHandler implements IEventHandler<HeroFoundItemEvent> {
  async handle(event: HeroFoundItemEvent) {
    console.log(clc.yellowBright('Async HeroFoundItemEvent...'));

    const randomString = crypto.randomBytes(40).toString('hex');
    console.log('String to hash: ', randomString)

    const hashed = await promisifyedHash(randomString, 20)
    console.log('Result: ' + hashed)
  }
}


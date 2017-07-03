import { getCollection } from './lib';

// so assign to main const, fat arrow func
const main = async () => {
  (await getCollection('users')).find().toArray().then((res) => {
    console.log("--- start ---");
    console.log(res);
    console.log("--- end ---");
    process.exit(0);
  });

}

main();

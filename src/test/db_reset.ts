import { createConnection } from 'typeorm';
import { Ecoverse, User, Challenge, Tag, UserGroup, Context } from '../models';


async function reset_db() {
  console.log('Database: Starting the reset of the database... ');
  const connection = await createConnection();
  
  await connection.dropDatabase();
  await connection.synchronize();

  console.log('Database: dropped... ');

  // Create new Ecoverse
  const ctverse = new Ecoverse("CherryTwist dogfood");
  await ctverse.save();

  // Tags
  const java = new Tag('Java');
  await java.save();
  const graphql = new Tag('GraphQL');
  await graphql.save();
  ctverse.tags = [java, graphql];
  

  // User Groups
  const jedi = new UserGroup("Jedi");
  await jedi.save();
  const crew = new UserGroup("Crew");
  await crew.save();
  ctverse.groups = [jedi, crew];

  // Challenges
  const energyWeb = new Challenge('Energy Web');
  energyWeb.tags = [java];
  energyWeb.context = new Context();
  energyWeb.context.description = "Balance the grid in a decentralised world";
  energyWeb.context.challenge = energyWeb;
  energyWeb.context.ecoverse = ctverse;
  await energyWeb.save();

  const cleanOceans = new Challenge('Clean Oceans');
  cleanOceans.tags = [graphql];
  cleanOceans.context = new Context();
  cleanOceans.context.description = "Keep our Oceans clean and in balance!";
  await energyWeb.save();

  const cargoInsurance = new Challenge('Cargo Insurance');
  cargoInsurance.tags = [graphql, java];
  cargoInsurance.context = new Context();
  cargoInsurance.context.description = "In an interconnected world, how to manage risk along the chain?";
  await cargoInsurance.save();

  ctverse.challenges = [cleanOceans, energyWeb, cargoInsurance];
  await ctverse.save();

  // Users
  const john = new User("john");
  await john.save()
  const bob = new User("bob");
  await bob.save();
  ctverse.members = [john, bob];

  await ctverse.save();

};

reset_db().then(()=>{
  console.log('Database: reset complete...');
  process.exit();
}).catch(function(e){
  throw e;
});

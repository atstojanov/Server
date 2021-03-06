import { MaxLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import { ReferenceInput, TagInput, UpdateReferenceInput, UpdateNestedTagInput } from '.';

@InputType()
export class ContextInput {

    @Field({ nullable: true })
    @MaxLength(50)
    name?: string;

    @Field({ nullable: true })
    @MaxLength(4096)
    background?: string;

    @Field({ nullable: true })
    @MaxLength(128)
    lifecyclePhase?: string;

    @Field({ nullable: true })
    @MaxLength(1024)
    vision?: string;

    @Field({ nullable: true })
    @MaxLength(255)
    tagline?: string;

    @Field({ nullable: true })
    @MaxLength(1024)
    who?: string;

    @Field({ nullable: true })
    @MaxLength(1024)
    impact?: string;

    @Field(() => [ReferenceInput], { nullable: true })
    references?: ReferenceInput[];

    @Field(() => [TagInput], { nullable: true })
    tags?: TagInput[];

}

@InputType()
export class BaseUpdateContextInput {

  @Field( { nullable: true } )
  @MaxLength(50)
  name?: string;

  @Field( { nullable: true } )
  @MaxLength(4096)
  background?: string;

  @Field( { nullable: true } )
  @MaxLength(128)
  lifecyclePhase?: string;

  @Field( { nullable: true } )
  @MaxLength(1024)
  vision?: string;

  @Field( { nullable: true } )
  @MaxLength(255)
  tagline?: string;

  @Field( { nullable: true } )
  @MaxLength(1024)
  who?: string;

  @Field( { nullable: true } )
  @MaxLength(1024)
  impact?: string;

  @Field(() => [UpdateReferenceInput], { nullable: true } )
  references?: UpdateReferenceInput[];

  @Field(() => [UpdateNestedTagInput], { nullable: true } )
  tags?: UpdateNestedTagInput[];
}

@InputType()
export class UpdateRootContextInput extends BaseUpdateContextInput {

  @Field()
  id! : number;

}

@InputType()
export class UpdateNestedContextInput extends BaseUpdateContextInput {

  @Field( { nullable: true } )
  id? : number;

}
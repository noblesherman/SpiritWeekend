# Spirit Weekend 2026

This is your starter project for the Spirit Weekend 2026 site.

The idea is to build this out in layers instead of trying to do everything at once. The front-end pages are already here, and the next big piece is the registration flow.

By the time this project is doing its job, someone should be able to:

1. visit the site
2. fill out the registration form
3. pay through Stripe
4. end up in the database with a paid status

That is the main thing this project needs to do.

## What I’d do first

Start simple.

1. Run the app locally
2. Click through the existing pages
3. Change a little bit of text so you get a feel for the structure
4. Add a `/register` page
5. After that, start wiring up Prisma and Stripe

If you want one clear short-term goal, make it this:

Get a registration page on the screen first.

## What’s already here

Right now the project already includes:

- a homepage (Needs Editing)
- an about page (Needs Editing)
- a schedule page (Needs Editing)
- a contact page (Needs Editing)
- shared layout/components
- global CSS

So the foundation is in place already. You’re mostly building the registration and payment part on top of it.

## Run the project

Install dependencies:


npm install

Start the dev server:

npm run dev

Open:

http://localhost:3000


Before adding anything major, just spend a few minutes looking around and seeing how the project is organized.

## Where to edit things

Most of the page text lives here:

- `src/app/page.tsx`
- `src/app/about/page.tsx`
- `src/app/schedule/page.tsx`
- `src/app/contact/page.tsx`

The schedule data is here:

- `src/data/schedule.ts`

The shared layout is here:

- `src/app/layout.tsx`

Reusable UI components are here:

- `src/components`

The main styling is here:

- `src/app/globals.css`

## Your first real task

The first feature I’d add is:


src/app/register/page.tsx


At the beginning, keep it lightweight. That page only needs:

- a heading
- a short explanation
- a form
- a submit button

Don’t worry about the backend yet. Just get the page built and make it feel like it belongs with the rest of the site.

## Good form fields for version one

You don’t need a huge form to start.

These fields are enough:

- full name
- email
- phone number
- church name
- emergency contact name
- emergency contact phone
- notes

You can always add more later if the event needs them.

## The overall plan

Here’s the clean version of the build order:

1. make the public pages feel right
2. add the `/register` page
3. make the form UI work
4. add Prisma and save registrations
5. add Stripe Checkout
6. add the Stripe webhook
7. confirm registrations move to `paid`

That’s the path I’d stick to.

## What Prisma is doing

Prisma is the layer between your app and the database.

You’ll use it to save registrations, update payment status, and query the event data later if you need to.

Without Prisma, the form is just UI. With Prisma, the form actually creates records you can work with.

## What Stripe is doing

Stripe handles the payment side.

For this project, use Stripe Checkout, not a custom payment form. That keeps the amount of payment code smaller and avoids a lot of unnecessary complexity.

The flow should be:

1. collect registration details
2. save them in the database
3. send the user to Stripe Checkout
4. wait for Stripe to confirm payment by webhook

## What Stripe CLI is doing

Stripe CLI is just there to make local testing easier.

When you’re working on the webhook, Stripe CLI forwards Stripe events to your machine so you can test the full flow locally instead of guessing whether the webhook works.

## Commands you’ll use later

You do not need all of these on the first day, but these are the main setup commands once you start on the backend.

### Install Prisma and Stripe packages

```bash
npm install @prisma/client stripe
npm install --save-dev prisma
```

### Initialize Prisma

```bash
npx prisma init --datasource-provider postgresql
```

### Create the first migration

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### Open Prisma Studio

```bash
npx prisma studio
```

### Install Stripe CLI on macOS

```bash
brew install stripe/stripe-cli/stripe
```

### Log into Stripe CLI

```bash
stripe login
```

### Forward Stripe events to your local app

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

## Files you’ll probably add

Once you start building the registration flow, these are the main files you’ll want:

```text
prisma/schema.prisma
prisma.config.ts
src/lib/prisma.ts
src/lib/stripe.ts
src/app/register/page.tsx
src/app/register/success/page.tsx
src/app/register/cancel/page.tsx
src/app/api/register/route.ts
src/app/api/stripe/webhook/route.ts
```

## What those files are for

`prisma/schema.prisma`
This is where your database models live.

`src/lib/prisma.ts`
This is where you create and export the Prisma client.

`src/lib/stripe.ts`
This is where you create and export the Stripe client.

`src/app/register/page.tsx`
This is the registration form page.

`src/app/api/register/route.ts`
This should validate the form, save the registration, and create the Stripe Checkout Session.

`src/app/api/stripe/webhook/route.ts`
This should receive Stripe events and update the registration to `paid` when payment is confirmed.

`src/app/register/success/page.tsx`
This is the page Stripe redirects to after a successful checkout.

`src/app/register/cancel/page.tsx`
This is the page Stripe redirects to if someone leaves checkout without paying.

## The registration flow you’re building

This is the important part to keep in your head:

1. someone visits `/register`
2. they fill out the form
3. the form submits to `/api/register`
4. the app saves a registration row with `paymentStatus = pending`
5. the app creates a Stripe Checkout Session
6. Stripe Checkout opens
7. the person pays
8. Stripe sends a webhook to `/api/stripe/webhook`
9. the app updates that registration to `paid`

If that flow makes sense to you, the project will feel a lot more manageable.

## A good first Prisma model

When you add Prisma, I’d start with one model called `Registration`.

It can include fields like:

- `id`
- `fullName`
- `email`
- `phone`
- `churchName`
- `emergencyContactName`
- `emergencyContactPhone`
- `notes`
- `paymentStatus`
- `stripeCheckoutSessionId`
- `createdAt`
- `updatedAt`

That’s enough to get version one working.

## Environment variables you’ll need later

At some point you’ll need values like:

```env
DATABASE_URL=""
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
STRIPE_SECRET_KEY=""
STRIPE_WEBHOOK_SECRET=""
STRIPE_PRICE_ID=""
```

There’s also an `.env.example` file in the repo to help keep the names straight.

## What not to add yet

There are a lot of things you could build here, but I wouldn’t touch these until the core flow works:

- login/auth
- admin dashboard
- roles/permissions
- discounts/coupons
- custom card forms
- multi-step registration flows

For the first working version, you really just need:

1. a registration page
2. a database save
3. Stripe Checkout
4. a webhook update

## A good first work session

If you’re just sitting down to make progress, this is a solid first session:

1. run the project
2. change a little bit of content
3. create `src/app/register/page.tsx`
4. add the form
5. make the page feel consistent with the rest of the site

That would be a good day.

## A good second work session

Once the register page exists, I’d move to:

1. install Prisma
2. initialize Prisma
3. create the `Registration` model
4. run the migration
5. open Prisma Studio and make sure the database is working

## A good third work session

After that:

1. install Stripe
2. create a Stripe product and price in test mode
3. add `STRIPE_SECRET_KEY` and `STRIPE_PRICE_ID`
4. build `/api/register`
5. create the Checkout Session
6. redirect the user to Stripe Checkout

## A good fourth work session

Then:

1. install Stripe CLI
2. run `stripe login`
3. run `stripe listen --forward-to localhost:3000/api/stripe/webhook`
4. build the webhook route
5. run a full test payment
6. confirm the registration moves to `paid`

## How you’ll know it’s working

You’re in good shape when:

- the register page exists
- the form submits cleanly
- a registration shows up in the database
- Stripe Checkout opens
- the webhook fires
- the payment status changes to `paid`

That matters a lot more than polishing every visual detail too early.

## If you get stuck

The best question to ask is:

What is the next smallest useful thing to finish?

Usually that means one of these:

- edit one page
- add one field
- save one record
- fix one route
- test one step in the flow

That’s the pace I’d use for this project.

## Final note

You do not need to have the whole app in your head at once.

Just keep moving in this order:

1. pages
2. form
3. database
4. payment
5. webhook

If you stay in that order, the project should stay pretty manageable.

## Contact Info
- Noble Sherman
Email: noble@noblesweb.design
Phone Number: 610-690-9392

# SQL Scripts for Link Finance Website

This directory contains SQL scripts used for managing the database of the Link Finance website.

## Usage

To run these scripts, you can use the Supabase SQL Editor or a command-line tool connected to your PostgreSQL database.

### Available Scripts

- `01-create-tables.sql`: Creates the initial `events` and `projects` tables.
- `02-seed-data.sql`: Seeds initial data into the `events` and `projects` tables.
- `03-update-rodrigo-herrera-image.sql`: Updates the image path for the Rodrigo Herrera event.
- `05-update-june-10-event-image.sql`: Updates the image path for the June 10th event.
- `06-fix-date-format.sql`: Fixes date format issues in the `events` table.
- `07-fix-galapagos-date.sql`: Fixes the date for the Galapagos event.
- `11-add-sortable-date-field.sql`: Adds a `sortable_date` field to the `events` table.
- `12-add-rafael-lavrado-event.sql`: Adds the Rafael Lavrado event.
- `13-update-rodrigo-herrera-date.sql`: Updates the date for the Rodrigo Herrera event.
- `15-add-nord-wealth-event.sql`: Adds the Nord Wealth event.
- `16-add-yago-moreira-capacitacao.sql`: Adds the Yago Moreira Capacitação event.
- `18-remove-emmanuel-camelo-event.sql`: Removes the Emmanuel Camelo event.
- `19-remove-mesa-redonda-esg-event.sql`: Removes the Mesa Redonda ESG event.
- `20-remove-multiple-events.sql`: Removes multiple specified events.
- `21-update-claudio-mifano-image.sql`: Updates the image for the Claudio Mifano event.
- `22-verify-latest-events-order.sql`: Verifies the order of the latest events.
- `23-remove-duplicate-events.sql`: Removes duplicate events from the table.
- `24-add-emmanuel-camelo-event.sql`: Re-adds the Emmanuel Camelo event.
- `25-update-emmanuel-camelo-image.sql`: Updates the image for the Emmanuel Camelo event.
- `26-update-galapagos-image.sql`: Updates the image for the Galapagos event.
- `27-fix-galapagos-image-path.sql`: Fixes the image path for the Galapagos event.
- `28-remove-galapagos-event.sql`: Removes the Galapagos event.
- `29-add-galapagos-event-readd.sql`: Re-adds the Galapagos event.
- `30-update-galapagos-new-image.sql`: Updates the image for the re-added Galapagos event.
- `31-update-galapagos-event-date.sql`: Updates the date for the Galapagos event.
- `32-drop-articles-table.sql`: Drops the `articles` table from the database.
- `33-update-suzano-project-image.sql`: Updates the image path for a project to the Suzano logo.
- `34-update-vivara-project-image.sql`: Updates the image path for a project to the Vivara logo.
- `35-add-tags-column-to-events.sql`: Adds tags column to events table and populates with sample data.
- `35-update-tags-column-format.sql`: Updates tags column to use JSON array format and populates existing events with proper tags.

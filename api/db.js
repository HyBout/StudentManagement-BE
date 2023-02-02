const initOptions = {}
const pgp = require('pg-promise')(initOptions)

const cn = 'postgresql://postgres:@Phambaohuy0909@db.suxwmcaimdvmhbabdnte.supabase.co:5432/postgres'

module.exports = pgp(cn)

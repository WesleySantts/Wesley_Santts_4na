import { Pool } from "pg";

// Substitua pela sua string de conexão do Render.com
const connectionString = "postgresql://wesleysantts4_na_user:q6FfkVGz690IzLp6iQLYu6EnDmCZlGYz@dpg-cr7qss56l47c73bq76lg-a.oregon-postgres.render.com/wesleysantts4_na";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  },
});

export default pool;

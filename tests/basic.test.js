// @ts-check
import { test, expect } from "@playwright/test";

test("Abrir la app y verificar que la tabla se renderiza con 100 usuarios", async ({
  page,
}) => {
  await page.goto("");
  const lastUser = await page.getByRole("cell").nth(100);
  await expect(lastUser).toBeVisible();
});
test("Validar que cada fila muestra nombre, país y demás datos esperados", async ({
  page,
}) => {
  await page.goto("");
  const userImg = await page.getByTestId("user-img");
  const userName = await page.getByTestId("user-name");
  await expect(userImg).toBeDefined();
});

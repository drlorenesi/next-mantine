"use client";

import cx from "clsx";
import Link from "next/link";

import {
  ActionIcon,
  AppShell,
  Avatar,
  Burger,
  Divider,
  Group,
  NavLink,
  Menu,
  rem,
  ScrollArea,
  Title,
  UnstyledButton,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconGraph,
  IconSun,
  IconMoon,
  IconForms,
  IconTable,
  IconLogout,
  IconUserCog,
} from "@tabler/icons-react";

// Components
import Text from "./Text";
import Footer from "./Footer";

import classes from "./page.module.css";

export default function Home() {
  // Toggle menu hooks
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  // Color scheme hooks
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 260,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="sm" justify="space-between">
          <Group>
            <Burger
              opened={mobileOpened}
              onClick={toggleMobile}
              hiddenFrom="sm"
              size="sm"
            />
            <Burger
              opened={desktopOpened}
              onClick={toggleDesktop}
              visibleFrom="sm"
              size="sm"
            />
            <UnstyledButton component={Link} href="/">
              <Title order={3}>Next.js App</Title>
            </UnstyledButton>
          </Group>
          <Group justify="flex-end" gap="xs">
            {/* Darkmode */}
            {/* -------- */}
            <ActionIcon
              onClick={() =>
                setColorScheme(
                  computedColorScheme === "light" ? "dark" : "light"
                )
              }
              variant="default"
              size="lg"
              aria-label="Toggle color scheme"
            >
              <IconSun
                className={cx(classes.icon, classes.light)}
                stroke={1.5}
              />
              <IconMoon
                className={cx(classes.icon, classes.dark)}
                stroke={1.5}
              />
            </ActionIcon>
            {/* Profile Menu */}
            {/* ------------ */}
            <Menu shadow="md" width={200} position="bottom-end">
              <Menu.Target>
                {/* <Button>Toggle menu</Button> */}
                <UnstyledButton>
                  <Avatar color="cyan" radius="xl" />
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item component="a" href="https://mantine.dev">
                  Mantine website
                </Menu.Item>
                <Menu.Item
                  leftSection={
                    <IconUserCog style={{ width: rem(14), height: rem(14) }} />
                  }
                >
                  Mi Perfil
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item
                  leftSection={
                    <IconLogout style={{ width: rem(14), height: rem(14) }} />
                  }
                >
                  Cerrar Sesión
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <AppShell.Section grow component={ScrollArea}>
          {/* Reports */}
          {/* ------- */}
          <NavLink
            href="#required-for-focus"
            label="Reports"
            leftSection={
              <ActionIcon variant="filled" color="cyan" size="sm">
                <IconGraph
                  style={{ width: "70%", height: "70%" }}
                  stroke={1.5}
                />
              </ActionIcon>
            }
          >
            <NavLink label="First child link" href="#required-for-focus" />
            <NavLink label="Second child link" href="#required-for-focus" />
            <NavLink label="Third child link" href="#required-for-focus" />
          </NavLink>
          {/* Forms */}
          {/* ----- */}
          <NavLink
            href="#required-for-focus"
            label="Forms"
            leftSection={
              <ActionIcon variant="filled" color="grape" size="sm">
                <IconForms
                  style={{ width: "70%", height: "70%" }}
                  stroke={1.5}
                />
              </ActionIcon>
            }
          >
            <NavLink label="First child link" href="#required-for-focus" />
            <NavLink label="Second child link" href="#required-for-focus" />
            <NavLink label="Third child link" href="#required-for-focus" />
          </NavLink>
          {/* Tables */}
          {/* ------ */}
          <NavLink
            href="#required-for-focus"
            label="Third parent link"
            leftSection={
              <ActionIcon variant="filled" color="indigo" size="sm">
                <IconTable
                  style={{ width: "70%", height: "70%" }}
                  stroke={1.5}
                />
              </ActionIcon>
            }
          >
            <NavLink label="First child link" href="#required-for-focus" />
            <NavLink label="Second child link" href="#required-for-focus" />
            <NavLink label="Third child link" href="#required-for-focus" />
          </NavLink>
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Title order={4}>Main</Title>
        {/* <Text /> */}
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
}

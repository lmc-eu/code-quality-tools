# `@lmc-eu/renovate-config`

> LMC's config for renovate

## Usage

Enable Renovate in your repo and just `extends` in `renovate.json`.

```json
{
  "extends": ["@lmc-eu"]
}
```

Note: You don't have to do `npm i -D @lmc-eu/renovate-config`.

## Presets

### `@lmc-eu`

Default preset

```json
{
  "extends": [
    ":semanticPrefixFixDepsChoreOthers",
    ":ignoreModulesAndTests",
    ":autodetectPinVersions",
    "workarounds:all",
    ":prConcurrentLimit10"
  ],
  "labels": ["dependencies"],
  "branchPrefix": "dependencies/",
  "commitMessagePrefix": "Deps: "
}
```

### `@lmc-eu:scheduleWeeklyNonOfficeHours`

Schedule weekly non-office hours

```json
{
  "schedule": ["after 10pm and before 7am on Monday"]
}
```

### `@lmc-eu:groupMajorProdDependencies`

Group together major prod dependencies

```json
{
  "packageRules": [
    {
      "groupName": "major prod dependencies",
      "groupSlug": "major-prod",
      "matchPackagePatterns": ["*"],
      "matchUpdateTypes": ["major"],
      "matchDepTypes": ["dependencies"]
    }
  ]
}
```

### `@lmc-eu:groupNonMajorProdDependencies`

Group together non-major prod dependencies

```json
{
  "packageRules": [
    {
      "groupName": "non-major prod dependencies",
      "groupSlug": "non-major-prod",
      "matchPackagePatterns": ["*"],
      "matchUpdateTypes": ["minor", "patch"],
      "matchDepTypes": ["dependencies"]
    }
  ]
}
```

### `@lmc-eu:groupAllDevDependencies`

Group together all dev dependencies

```json
{
  "packageRules": [
    {
      "groupName": "all dev dependencies",
      "groupSlug": "all-dev",
      "separateMajorMinor": false,
      "matchPackagePatterns": ["*"],
      "matchDepTypes": ["devDependencies"]
    }
  ]
}
```

## References

- [Renovate Docs](https://renovatebot.com/docs/)
- [Configuration Options \| Renovate Docs](https://renovatebot.com/docs/configuration-options/)
- [Default Presets \| Renovate Docs](https://renovatebot.com/docs/presets-default/)

## License

[MIT License](https://opensource.org/licenses/MIT)

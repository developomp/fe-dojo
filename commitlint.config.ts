import { type UserConfig, RuleConfigSeverity } from "@commitlint/types"

const config: UserConfig = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "type-enum": [
            RuleConfigSeverity.Error,
            "always",
            ["chore", "ci", "docs", "feat", "fix", "refactor"],
        ],
    },
}

export default config

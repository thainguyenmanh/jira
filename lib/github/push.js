const transformPush = require('../transforms/push')

module.exports = async (context, jiraClient, util) => {
  await transformPush(context.payload, context.github, async ({ data: jiraPayload, commands }) => {
    await jiraClient.devinfo.repository.update(jiraPayload)

    // Don't run Jira commands
    // await util.runJiraCommands(commands)
  })
}

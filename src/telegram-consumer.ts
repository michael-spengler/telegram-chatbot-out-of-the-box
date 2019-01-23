import { TelegramInteractionBuilder, DefaultResponseProvider, AdvancedResponseProvider }
    from "telegram-interaction-builder"

export class TelegramConsumer {
    private interactionBuilder: TelegramInteractionBuilder
    private advancedResponseProvider: AdvancedResponseProvider

    public constructor() {

        // remember to include its name in .gitignore to keep your BOT_TOKEN secret
        const pathToYourConfigFile: string = "../../../.env"

        this.advancedResponseProvider = new AdvancedResponseProvider()

        this.interactionBuilder =
            new TelegramInteractionBuilder(pathToYourConfigFile, new DefaultResponseProvider())
    }

    public async startMyTelegramChatBot(): Promise<void> {
        await this.advancedResponseProvider.learn("exampleMap")

        this.interactionBuilder.setResponseProvider(this.advancedResponseProvider)
        this.interactionBuilder.startListening()
    }

}

const consumer: TelegramConsumer = new TelegramConsumer()
consumer.startMyTelegramChatBot()
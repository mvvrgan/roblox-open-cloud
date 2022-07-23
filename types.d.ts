declare module "roblox-open-cloud" {
    function sendMessage(apiKey:string, message: string, topic:string, experienceId: number): Promise<void>
}